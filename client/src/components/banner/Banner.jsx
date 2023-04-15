
import { Box, Typography, styled} from '@mui/material';
import image from "../account/assets/images/background-pic.jpg";

const Image = styled(Box) `
    background: url(${image}) center/50% repeat-x #000;
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Heading = styled(Typography) `
    font-size: 70px;
    color : #FFFFFF;
    line-height: 1;
`

const SubHeading = styled(Typography) `
    font-size: 20px;
    background: #FFFFFF;
`


const Banner = () => {
    return (
       <Image>
            <Heading>Anita Jadhav Blogs</Heading>
            <SubHeading>Create, don't copy ✍</SubHeading>
       </Image>
    )
}

export default Banner;