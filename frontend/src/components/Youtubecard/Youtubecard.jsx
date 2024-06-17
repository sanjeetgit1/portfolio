import React from 'react'
import "./Youtubecard.css";
import { Typography } from '@mui/material';

const Youtubecard = ({
    url="https://www.youtube.com/channel/UCt_eqdYOQ-_IK6dRwyPen5A",
    title="Title Here",
    image,
}) => {
  return (
    <div className='youtubeCard'>
        <a href={url} target='blank'>
            <img src={image} alt="video" />
            <Typography>{title}</Typography>
        </a>
     
    </div>
  )
}

export default Youtubecard
