import { Box, Typography, Grid } from '@mui/material'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab'

export const Education = () => {
  return (
    <Box id='education' sx={{ background: '#fff' }} width='80%' margin='50px auto'>
      <Typography variant='h3' component='div' p={3} fontWeight='bold' sx={{ color: '#0288d1' }}>
        EDUCATION
      </Typography>

      <Grid container justifyContent='space-evenly' >
        <Grid item md={5}>
        <Timeline sx={{ "& .MuiTimelineItem-root:before": { flex: 0 } }}>
            <TimelineItem>
              {/* <TimelineOppositeContent color='text.secondary' >9:30 am</TimelineOppositeContent> */}
              <TimelineSeparator>
                <TimelineDot color='info' variant='filled' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant='subtitle1'>SEPT 2022 - PRESENT</Typography>
                <Typography variant='h6' fontWeight='bold' m={1}>MERN Stack</Typography>
                <Typography variant='body1' m={1}>Brain Mentors, Ghaziabad</Typography>
                {/* <Typography>70.2%</Typography> */}
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              {/* <TimelineOppositeContent color='text.secondary' >9:30 am</TimelineOppositeContent> */}
              <TimelineSeparator>
                <TimelineDot color='info' variant='outlined' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant='subtitle1'>JULY-DEC 2022</Typography>
                <Typography variant='h6' fontWeight='bold' m={1}>UI Development</Typography>
                <Typography variant='body1' m={1}>Brain Mentors, Ghaziabad</Typography>
                {/* <Typography>70.2%</Typography> */}
              </TimelineContent>
            </TimelineItem>

          </Timeline>
        </Grid>
        <Grid item md={5}>
          <Timeline sx={{ "& .MuiTimelineItem-root:before": { flex: 0 } }}>
            <TimelineItem>
              {/* <TimelineOppositeContent color='text.secondary' >9:30 am</TimelineOppositeContent> */}
              <TimelineSeparator>
                <TimelineDot color='info' variant='outlined' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant='subtitle1'>2015-2019</Typography>
                <Typography variant='h6' fontWeight='bold' m={1}>B.Tech-EEE (AKTU) </Typography>
                <Typography variant='body1' m={1}>Raj Kumar Goel Institute of Technology, Ghaziabad</Typography>
                {/* <Typography>70.2%</Typography> */}
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              {/* <TimelineOppositeContent color='text.secondary' >9:30 am</TimelineOppositeContent> */}
              <TimelineSeparator>
                <TimelineDot color='info' variant='outlined' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant='subtitle1'>2012-2014</Typography>
                <Typography variant='h6' fontWeight='bold' m={1}>XII (CBSE)</Typography>
                <Typography variant='body1' m={1}>Bhavan’s K.D.K. Vidya Mandir Renukoot, Sonbhadra</Typography>
                {/* <Typography>70.2%</Typography> */}
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              {/* <TimelineOppositeContent color='text.secondary' >9:30 am</TimelineOppositeContent> */}
              <TimelineSeparator>
                <TimelineDot color='info' variant='outlined' />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant='subtitle1'>2010-2012</Typography>
                <Typography variant='h6' fontWeight='bold' m={1}>X (CBSE)</Typography>
                <Typography variant='body1' m={1}>Bhavan’s K.D.K. Vidya Mandir Renukoot, Sonbhadra</Typography>
                {/* <Typography>70.2%</Typography> */}
              </TimelineContent>
            </TimelineItem>

          </Timeline>
        </Grid>

      </Grid>


    </Box>
  )
}
