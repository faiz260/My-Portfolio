import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { Typography, Collapse, IconButton } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import Fade from "react-reveal/Fade";

function Contact() {
  const [emailSent, setemailSent] = useState(false);
  const [open, setOpen] = useState(true);

  console.log("Email sent 1 ", emailSent);
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_9ph52ue",
        e.target,
        "user_tswu6hwsfbqn7Mfypt7Tt"
      )
      .then(
        (result) => {
          console.log(result.text);
          setemailSent(true);
          console.log("Email Sent ", emailSent);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contact" id="Contact">
      <div className="contact_form">
        <Fade bottom>
          <Typography variant="h2" className="contact_head">
            Contact Me
          </Typography>
        </Fade>
        <Typography variant="body1" className="contact_me_text">
          <Fade bottom>
            {" "}
            I am available for freelance work. Connect with me via phone:
            +923462772919 or email: razafaiz@gmail.com
          </Fade>
        </Typography>

        {emailSent ? (
          <Collapse in={open}>
            <Alert
              className="alert"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              Message Sent!
            </Alert>
          </Collapse>
        ) : (
          false
        )}
        <form onSubmit={sendEmail} className="form">
          <Fade left>
            <input
              type="text"
              placeholder="Your Name *"
              name="name"
              className="input"
              required={true}
            />
            <input
              type="email"
              placeholder="Your Email *"
              name="email"
              className="input"
              required={true}
            />
            <input
              type="text"
              placeholder="Write a Subject*"
              name="subject"
              className="input"
              required={true}
            />
            <textarea
              type="text"
              placeholder="Your Message *"
              name="message"
              className="input"
              required={true}
            />
            <input
              type="submit"
              className="input_btn"
              value="Send Message"
            ></input>
          </Fade>
        </form>
      </div>
      <div className="contact_img">
        <Fade right>
          <img src="/Images/faiz_shahnawaz.png" alt="faiz_shahnawaz" />
        </Fade>
      </div>
    </div>
  );
}

export default Contact;
