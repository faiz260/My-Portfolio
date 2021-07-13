import React from "react";
import { Typography } from "@material-ui/core";
import "./About.css";
import RellaxWrapper from "react-rellax-wrapper";
import Fade from "react-reveal/Fade";

function AboutMe() {
  return (
    <div className="about_me">
      <img src="/Images/about-background.png" alt="bg" className="about_bg" />
      <img src="/Images/shape4.png" alt="shape" className="shape4" />
      <img src="/Images/shape5.png" alt="shape" className="shape5" />

      <Fade top>
        <Typography variant="h2" className="about_me_head">
          About me
        </Typography>
      </Fade>

      <Typography variant="subtitle1" className="about_me_text">
        <Fade bottom>
          I am a front end developer with robust problem-solving skills and
          proven experience in creating and designing web applications in a
          test-driven environment.
        </Fade>
      </Typography>
    </div>
  );
}

export default AboutMe;
