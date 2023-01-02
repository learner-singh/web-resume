import { useState } from 'react'
import { Box, Typography, Tab } from '@mui/material'
import {TabContext, TabList, TabPanel} from '@mui/lab'
import { ProjectTab } from '../components/ProjectTab'
// import FavouriteIcon from '@mui/icons-material/Favorite'
import { projectData } from '../data/projectInfo'




export const Projects = () => {
    const [value, setValue] = useState('1')
    const handleChange = (event, newValue) =>{
        setValue(newValue)
    }
    const projects = projectData
    const reactProjects = projects.filter(project => (project.webLangUsed.includes('React JS')))
    const javascriptProjects = projects.filter(project => (project.webLangUsed.includes('Javascript')))
    const bootstrapProjects = projects.filter(project => (project.webLangUsed.includes('Bootstrap')))
    const htmlCssProjects = projects.filter(project => (project.webLangUsed.includes('CSS')))

    console.log("React Js", reactProjects)
    return (
        <Box id='projects' sx={{ background: '#fff' }} width='80%' margin='50px auto' >
            <Typography variant='h3' component='div' p={3} fontWeight='bold' sx={{ color: '#0288d1' }}>
                PROJECTS
            </Typography>

            {/* TAB */}
            <TabContext value={value} >
            <Box sx={{borderBottom: 1, borderColor: 'divider',}} p={3} >
                <TabList 
                    aria-label='Tabs-example' 
                    onChange={handleChange} 
                    textColor='primary' 
                    indicatorColor='primary' 
                    // centered
                    variant='scrollable'
                    scrollButtons='auto'
                >
                    {/* <Tab label='Tab One' value='1' icon={<FavouriteIcon />} iconPosition='start' /> */}
                    <Tab label='All' value='1'/>
                    <Tab label='React JS' value='2' />
                    <Tab label='JavScript' value='3' />
                    <Tab label='HTML5-CSS3' value='4' />
                    <Tab label='Bootstrap' value='5' />
                    {/* <Tab label='jQuery' value='6' /> */}

                </TabList>
            </Box>
            <TabPanel value='1'>
               <ProjectTab data= {projects} />
            </TabPanel>
            <TabPanel value='2'>
               <ProjectTab data= {reactProjects} />
            </TabPanel>
            <TabPanel value='3'>
                <ProjectTab data={javascriptProjects} />
            </TabPanel>
            <TabPanel value='4'>
               <ProjectTab data= {htmlCssProjects} />
            </TabPanel>
            <TabPanel value='5'>
               <ProjectTab data= {bootstrapProjects} />
            </TabPanel>
            {/* <TabPanel value='6'> jQuery Projects</TabPanel> */}
        </TabContext>

        </Box>
    )
}
