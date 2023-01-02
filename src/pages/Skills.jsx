import { Box, LinearProgress, Typography, Grid } from '@mui/material'

export const Skills = () => {
    return (
        <Box sx={{ background: '#fff' }} width='80%' margin='50px auto' >
            <Typography variant='h3' component='div' p={3} fontWeight='bold' sx={{ color: '#0288d1' }}>
                SKILLS
            </Typography>

            <Grid id='skills' container paddingBottom={4} rowSpacing={5} justifyContent='space-evenly' >
                <Grid item md={5}>
                    <Box flexDirection='row' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        {/* <Avatar alt="html Icon" src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png' size='small' p={1}/> */}
                        <Typography component='span'>HTML 5</Typography>
                        <Typography>70%</Typography>
                    </Box>
                    <LinearProgress variant='determinate' color='warning' value={70} />
                </Grid>

                <Grid item md={5}>
                    <Box flexDirection='row' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>CSS 3</Typography>
                        <Typography>70%</Typography>
                    </Box>
                    <LinearProgress variant='determinate' color='warning' value={70} />
                </Grid>

                <Grid item md={5}>
                    <Box flexDirection='row' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>Bootstrap</Typography>
                        <Typography>60%</Typography>
                    </Box>
                    <LinearProgress variant='determinate' color='warning' value={60} />
                </Grid>

                <Grid item md={5}>
                    <Box flexDirection='row' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>JavaScript</Typography>
                        <Typography>60%</Typography>
                    </Box>
                    <LinearProgress variant='determinate' color='warning' value={60} />
                </Grid>

                <Grid item md={5}>
                    <Box flexDirection='row' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>React JS</Typography>
                        <Typography>50%</Typography>
                    </Box>
                    <LinearProgress variant='determinate' color='warning' value={50} />
                </Grid>

                <Grid item md={5}>
                    <Box flexDirection='row' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>TypeScript</Typography>
                        <Typography>40%</Typography>
                    </Box>
                    <LinearProgress variant='determinate' color='warning' value={40} />
                </Grid>

                <Grid item md={5}>
                    <Box flexDirection='row' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>Material UI</Typography>
                        <Typography>50%</Typography>
                    </Box>
                    <LinearProgress variant='determinate' color='warning' value={50} />
                </Grid>

                <Grid item md={5}>
                    <Box flexDirection='row' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>C++</Typography>
                        <Typography>60%</Typography>
                    </Box>
                    <LinearProgress variant='determinate' color='warning' value={60} />
                </Grid>

                {/* <Grid item md={5}>
                    <Box flexDirection='row' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>jQuerry</Typography>
                        <Typography>0%</Typography>
                    </Box>
                    <LinearProgress variant='determinate' color='warning' value={0} />
                </Grid> */}
            </Grid>

        </Box>
    )
}
