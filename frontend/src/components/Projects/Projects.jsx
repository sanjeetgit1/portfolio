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

const Projects = ({projects}) => {
  
  return <div className='projects '>
    <Typography variant='h2'>
      Projects <AiOutlineProject/>
    </Typography>

    <div className='porjectsWrapper'>
      { projects.map((item)=>(
        < ProjectCard
        id={item._id}
        key={item._id}
        url={item.url}
  projectImage={item.image.url}
  projectTitle={item.title}
  description={item.description}
  technologies={item.technologies}
        />
      ))}
      
    </div>
    <Typography variant="h2" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>

  </div>
}

export default Projects
