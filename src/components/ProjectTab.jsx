import React from 'react'
// import { projectData } from '../data/projectInfo'
import {Box, Card, CardContent,Typography, CardActions, Button, CardMedia, Link} from '@mui/material'


export const ProjectTab = ({data}) => {
    const projects= data
    // const projects= projectData
    // console.log(data);
    // console.log('data0', data[0])
  return (
    <Box  sx={{ display: 'inline-flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent:'space-between' }}>
    {
        projects.map((project)=>(
            <Card key={project.id}  sx={{width:'300px', margin:'10px', bgcolor:'#efefef', position: 'relative'}}>
            <CardMedia 
                component='img'
                height='144px'
                // image='https://source.unsplash.com/random'
                image={project.image}
            />
            <CardContent>
                <Typography variant='subtitle1' component='div' >
                    {project.title}
                </Typography>
                <Typography variant='body2' color='text.secondary' gutterBottom paddingBottom={2} >
                    {project.desc}
                </Typography>
            </CardContent>
            <CardActions sx={{position: 'absolute', bottom: '0px', textAlign:'left'}}>
                {project.webLangUsed.map(item=> (
                <Button key={item} size='small'>{item}</Button>
                ))}
                <hr />
            </CardActions>
            <Button sx={{position: 'absolute', top:"155px", right: '5px'}} size='small' variant='outlined'>
            <Link href={project.link} color='inherit' underline="none" target='_blank' rel="noopener" >
            Go To Website
            </Link>
                </Button>

        </Card>
            
        ))
    }
    </Box>
  )
}
