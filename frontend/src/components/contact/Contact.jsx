import React, { useState } from "react";
import "./Contact.css";
import { Typography } from "@mui/material";
const Contact = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  const contactFormHandler=(e)=>{
    e.preventDefault();
  }

  return (
    <div className="contact">
      <div className="contactRightBar"></div>
      <div className="contactContainer" >
        <form className="contactContainerForm"  onSubmit={contactFormHandler}>
          <Typography variant="h4">Contact Us</Typography>
          <input
            type="text"
            placeholder="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            colse="30"
            rows="10"
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button variant="contained" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
