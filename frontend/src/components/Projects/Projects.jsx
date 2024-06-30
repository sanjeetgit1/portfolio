import React from 'react'
import "./Projects.css"
import { Button, Typography } from '@mui/material'
import {AiOutlineProject} from "react-icons/ai";
import { Delete } from '@mui/icons-material';
import { FaRegSmileWink } from "react-icons/fa";
 export const ProjectCard =({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin=false,

})=>{
  return (
    <>
    <a href={url} className='projectCard' target='black'>
 

    <div>
      <img src={projectImage} alt="Project" />
      <Typography variant='h5'>{projectTitle}</Typography>
    </div> 
    <div>
      <Typography variant='h4'> About Project</Typography>
      <Typography >{description}</Typography>
      <Typography variant='h6'>Tech Stack:{technologies}</Typography>
    </div>
      </a>

       {isAdmin && (
        <Button style={{color:"rgba(40,40,40,0.7"}}>
          <Delete/>
        </Button>
       )}
    </>
  )
}

const Projects = () => {
  const projects=[1,2,3,5];
  return <div className='projects '>
    <Typography variant='h2'>
      Projects <AiOutlineProject/>
    </Typography>

    <div className='porjectsWrapper'>
      { projects.map((project,index)=>(
        < ProjectCard
        url="https://github.com/sanjeetgit1"
  projectImage="https://plus.unsplash.com/premium_photo-1718204434029-d710f571cf14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
  projectTitle="Sample Project"
  description="This is a sample project .Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum a saepe nemo optio corrupti, beatae animi dolores veniam distinctio debitis? "
  technologies="Mongodb ,react , nodejs Express"
        />
      ))}
      
    </div>
    <Typography variant="h2" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>

  </div>
}

export default Projects
