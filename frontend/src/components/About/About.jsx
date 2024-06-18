import React from "react";
import "./About.css";
import { Typography } from "@mui/material";

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>This is a sample qoute</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src="https://media.licdn.com/dms/image/D4D03AQG8-VuE7fZayQ/profile-displayphoto-shrink_800_800/0/1718219409380?e=1724284800&v=beta&t=qyXHq69wbP6_ptghmV84xxKzq_E1rDNq4pF2ghRm05Q" alt="sk" 
          className="aboutAvatar"/>
          <Typography variant="h4"
          style={{
            margin:"1vmax 0",
            color:'black'
          }}
          >Sanjeet kushwaha</Typography>
          <Typography>Full stack Developer</Typography>
          <Typography>I'm a Student</Typography>
        </div>
        <div>
            <Typography
            style={{
                wordSpacing:"5px",
                lineHeight:"50px",
                letterSpacing:"5px",
                textAlign:"right",
            }}
            >This is description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, similique unde. Nisi quas, ea dolor reiciendis facilis, sit molestiae rem quae officiis fugiat, dignissimos sint?</Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
