import { useState, useContext} from 'react';
import { Box, TextField, Button, styled, Typography } from '@mui/material';
import logo from './assets/images/logo.png';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

import { useNavigate } from 'react-router-dom';
const Component = styled(Box)`
    width : 500px;
    margin : auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled('img')({
    width : 300,
    margin : 'auto',
    display : 'flex',
    padding : '5px 0 0'
})

const Wrapper = styled(Box)`
    padding : 17px 35px;
    display : flex;
    flex : 1;
    overflow: auto;
    flex-direction : column;
    & > div, & > button, & > p {
        margin-top: 10px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background-color : #343148;
    color : #fff;
    height : 48px;
    border-radius : 2px;
`;

const SignupButton = styled(Button)`
text-transform: none;
background-color : #D7C49E;
color : #343148;
height : 48px;
border-radius : 2px;
box-shadow : 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Error = styled(Typography) `
font-size : 10px;
color : #ff6161;
line-height: 0;
margin-top: 10px;
font-weight: 600;
`

const Text = styled(Typography)`
    color : #343148;
    font-size: 16px;
`
const loginInitialValues = {
    username: '',
    password: ''
}

const signupInitialValues = {
    name : '',
    username : '',
    password : '',
}

const Login = ({isUserAuthenticated}) => {

    const[account, toggleAccount] = useState('login');
    const[signup, setSignup] = useState(signupInitialValues);
    const[login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState('');

    const { setAccount } = useContext(DataContext);
    const navigate = useNavigate();


    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');

    }

    const onInputChange = (e) => {
        setSignup( {...signup,[e.target.name] : e.target.value});
    }

    const signupUser = async () => {
       let response = await API.userSignup(signup);
       if(response.isSuccess) {
        setSignup(signupInitialValues);
        toggleAccount('login');
       }
       else {
        setError('Something went wrong! Please try again later');
       }
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value})

    }

    const loginUser = async () => {
       let response = await API.userLogin(login);
       if (response.isSuccess){
        setError('');

        sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
        sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);

       setAccount({ username: response.data.username, name: response.data.name})

       isUserAuthenticated(true);
       
       navigate('/');


       } else {
        setError('Something went wrong Please try again later');
       }
    }

    return(
       <Component> 
        <Box>
            <Image src = {logo} alt = "login" />
            {
                account === 'login' ?
            
            <Wrapper>
                <TextField variant = "outlined" value={login.username} onChange={(e) => onValueChange(e)} name = 'username' label = 'Username'/>
                <TextField variant = "outlined" value={login.password} onChange={(e) => onValueChange(e)} name = 'password' label = 'Password' />

                {error && <Error>{error}</Error>}

                <LoginButton variant = "contained" onClick={() => loginUser()}>Login </LoginButton>
                <Text  style = {{textAlign : ' center'}}> OR </Text >
                <SignupButton onClick = {() => toggleSignup()} variant = "text">Register</SignupButton>
            </Wrapper> 
            :
              <Wrapper>
<<<<<<< HEAD
                <TextField variant = "filled" onChange={(e) => onInputChange(e)} name = 'name' label = 'Name'/>
                <TextField variant = "filled" onChange={(e) => onInputChange(e)} name = 'username' label = 'Username' />
                <TextField variant = "filled" onChange={(e) => onInputChange(e)} name = 'password' label = 'Password' />
=======
                <TextField variant = "outlined" onChange={(e) => onInputChange(e)} name = 'name' label = 'Name'/>
                <TextField variant = "outlined" onChange={(e) => onInputChange(e)} name = 'username' label = 'Username' />
                <TextField variant = "outlined" onChange={(e) => onInputChange(e)} name = 'password' label = 'Password' />
>>>>>>> 1e8469888b95846f0d429a71d8991341536c2daf

                {error && <Error>{error}</Error>}

                <SignupButton onClick={() => signupUser()}>Signup</SignupButton>
                <Text  style = {{textAlign : ' center'}}> OR </Text >
                <LoginButton variant = "contained" onClick ={() => toggleSignup()}> Already have an account</LoginButton>
            </Wrapper>
            }
        </Box>
       </Component>
    )
}

export default Login;