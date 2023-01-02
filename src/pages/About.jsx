import { Box, Paper, Typography, Grid, Button, Stack } from '@mui/material'
import image from '../images/image1.jpeg'
import GetAppIcon from '@mui/icons-material/GetApp'
import VisibilityIcon from '@mui/icons-material/Visibility'

export const About = () => {
    return (
        <Box id='about' sx={{ width: '80%', textAlign: 'center' }} p={2} margin='64px auto'>
            <Paper elevation={8} >

                <Grid container my={3} justifyContent='space-evenly' alignItems='center' >
                    <Grid item xs={7} >
                        <Typography variant='h2' component='div' paddingTop={4} fontWeight='bold' sx={{color: '#0288d1'}}>
                            Hello,
                        </Typography>
                        <Typography variant='h6' component='div' textAlign='justify' paddingLeft={4} >
                            I am Kishan Singh, Frontend Developer from Saket, New Delhi. Currently I am pursuing to grow my skills covering even backend and database technologies, so that I can become a Full Stack Developer. My ambition is to secure a challenging position in an esteemed organization which helps me to realize my potential and to enhance my skill-set and accomplishing organizational growth.
                        </Typography>
                        <Stack spacing={2} direction='row' justifyContent='center' m={3}>
                            <Button variant='contained' color='info' startIcon={<GetAppIcon />} > Resume</Button>
                            <Button variant='contained' color='info' startIcon={<VisibilityIcon />} href='#projects' >Projects</Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Box component={'img'} src={image} alt='Profile Image' height='280px' width='220px' margin='auto' />
                    </Grid>
                </Grid>
            </Paper>
        </Box>

    )
}
