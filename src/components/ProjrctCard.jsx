import {Box, Card, CardContent,Typography, CardActions, Button, CardMedia} from '@mui/material'
import MusicPlayer from '../images/musicPlayer-card.webp'

export const ProjectCard = () => {
  return (
    <Box width='300px'>
        <Card>
            <CardMedia 
                component='img'
                height='144px'
                // image='https://source.unsplash.com/random'
                image={MusicPlayer}
            />
            <CardContent>
                <Typography variant='h5' component='div' gutterBottom>
                    React
                </Typography>
                <Typography variant='body2' color='text.secondary' >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic fugiat debitis est sunt nisi nulla harum qui reprehenderit commodi laborum quisquam, in ullam, ea accusamus dolor accusantium maxime quibusdam doloribus!
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
            </CardActions>
        </Card>
            
  </Box>
  )
}


/*
HTML+ CSS - LinkedIn, Spotify, barberShop

Bootstrap - Dweller

JavaScript - MiniCalc, TicTacToe, MusicPlayer, sign-up page, TaskManager, Pizza Shop

React- ExpenseManager

*/