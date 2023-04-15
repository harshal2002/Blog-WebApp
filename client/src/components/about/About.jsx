
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/13-133107_wallpaper-vintage-pens-writing-paper-izhaar-e-mohabbat.jpg
    );
    width: 100%;
    height: 70vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Anita Jadhav</Typography>
                <Text variant="h5">I'm a working woman currently working in a wire and cables company. 
                    I've always had an interest in writing blogs so I asked my son Harshal Jadhav to create this web application where I and many other people can write blogs under various categories<br />
                    If you are interested, you can view some of his projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/harshal2002" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to Harshal Jadhav on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/harshal_jadhav619/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send him an Email 
                        <Link href="mailto:harshal8425@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;