import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

function Contact() {
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
          alert("Message Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="contact" id="#Contact">
      <div className="contact_form">
        <Typography variant="h2" className="contact_head">
          Contact Me
        </Typography>
        <Typography variant="body1" className="contact_me_text">
          I am available for freelance work. Connect with me via phone: 01923
          088574 or email: admin@example.com
        </Typography>
        <form onSubmit={sendEmail} className="form">
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
        </form>
      </div>
      <div className="contact_img">
        <img src="/Images/faiz_shahnawaz.png" alt="faiz_shahnawaz" />
      </div>
    </div>
  );
}

export default Contact;
