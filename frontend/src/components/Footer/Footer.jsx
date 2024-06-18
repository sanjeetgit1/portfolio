import {Typography} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";
import {BsGithub,BsYoutube,BsInstagram,BsLinkedin} from "react-icons/bs";

import "./footer.css"



const Footer = () => {
  return <div className='footer'>


  <div>
    <Typography variant="h5">About Me</Typography>
      <Typography>
 Hello , My name is Sanjeet kushwaha . I am a full-Stack Developer .
  </Typography>
  <Link to="/contact" className="footerContactBtn">
  <Typography>Contact Us</Typography>
  </Link>
  </div>
  <div>
    <a href="https://github.com/sanjeetgit1" target='black'><BsGithub/></a>
    <a href="https://www.linkedin.com/in/sanjeet-kushwaha-54905b228/" target='black'><BsLinkedin/></a>
    <a href="#" target='black'><BsInstagram/></a>
    <a href="#" target='black'><BsYoutube/></a>
  </div>

     </div>
  
}

export default Footer
