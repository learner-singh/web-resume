import React from 'react'
// import {Containter} from '@mui/material/Container'
import {Box} from '@mui/material'
import { Navbar } from '../components/Navbar'
import { About } from './About'
import { Education } from './Education'
import { Skills } from './Skills'
import { Projects } from './Projects'
import { Contact } from './Contact'

export const Home = () => {
  return (
    <Box >
        <Navbar />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
    </Box>
  )
}
