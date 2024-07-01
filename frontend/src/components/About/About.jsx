import React from "react";
import "./About.css";
import { Typography } from "@mui/material";

const About = ({about}) => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>{about.quote}</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src="https://media.licdn.com/dms/image/D4D03AQG8-VuE7fZayQ/profile-displayphoto-shrink_800_800/0/1718219409380?e=1725494400&v=beta&t=6M__Focx283IAxEFolh4BiAP1GTL2rlDpVOW_0IJ00Y"  alt="sk"
          className="aboutAvatar"/>
          <Typography variant="h4"
          style={{
            margin:"1vmax 0",
            color:'black'
          }}
          >{about.name}</Typography>
          <Typography>{about.title}</Typography>
          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>{about.subtitle}</Typography>
        </div>
        <div>
            <Typography
            style={{
                wordSpacing:"5px",
                lineHeight:"50px",
                letterSpacing:"5px",
                textAlign:"right",
            }}
            >{about.description}</Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
