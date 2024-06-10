import React from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineConnector";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Event } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import TimelineConnector from "@mui/lab/TimelineConnector";

const TimeLine = ({ timelines = [] }) => {
  return (
    <Timeline position="alternate">
      {timelines.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent
          sx={{m:"auto 0"}}
          align="right"
          variant="body2"
          color="text.secondary"

          >
            6/10/24</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector>
            <TimelineDot>
              <Event/>
            </TimelineDot>
            </TimelineConnector>
          </TimelineSeparator>
          <TimelineContent sx={{py:"12px" , px:2}}>
            <Typography variant="h6">Title</Typography>
            <Typography>Description</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default TimeLine;
