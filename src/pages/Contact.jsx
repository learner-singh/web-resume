import { Box, Typography, Stack, IconButton, Link } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactImage from '../images/contact.jpg'

export const Contact = () => {
    return (
        <Box id='contact' sx={{ background: '#fff' }} width='80%' margin='50px auto' >
            <Typography variant='h3' component='div' p={3} fontWeight='bold' sx={{ color: '#0288d1' }}>
                CONTACT
            </Typography>

            <Box sx={{display: 'flex', justifyContent:'space-around'}}>
            <Stack direction='column' spacing={1} paddingLeft={2}>
                <Typography variant='h6'> Kishan Singh</Typography>
                <Typography variant='subtitle1' color='error'>Frontend Developer</Typography>

                <Typography>
                    <IconButton aria-label="Phone Number" color='error'>
                        <PlaceIcon sx={{ height: 28, width: 28 }} />
                    </IconButton>
                    Saket, New Delhi.
                </Typography>
                <Typography>
                    <IconButton aria-label="Phone Number" color='error'>
                        <CallIcon sx={{ height: 28, width: 28 }} />
                    </IconButton>
                    +91 8957270623
                </Typography>
                <Typography>
                    <IconButton aria-label="Phone Number" color='error'>
                        <EmailIcon sx={{ height: 28, width: 28 }} />
                    </IconButton>
                    kishansingh.gzb@gmail.com
                </Typography>
            </Stack>
            <Stack>
                <Box component='img' src={ContactImage} alt='Contact Image'
                    sx={{
                        height:'200px',
                        width: '300px',
                        borderRadius: '8px'
                    }}
                />
            </Stack>
            </Box>


            <Stack direction='row' spacing={1} p={3} justifyContent='center'>
                <Link href='https://www.linkedin.com/in/kishan-singh-53686b220/' target='_blank' rel="noopener" underline="none" >
                    <IconButton aria-label="LinkedIn" color='error'>
                        <LinkedInIcon sx={{ height: 48, width: 48 }} />
                    </IconButton>
                </Link>
                <Link href='https://github.com/learner-singh?tab=repositories' target='_blank' rel="noopener" underline="none" >
                    <IconButton aria-label="LinkedIn" color='error'>
                        <GitHubIcon sx={{ height: 48, width: 48 }} />
                    </IconButton>
                </Link>
            </Stack>
        </Box>
    )
}
