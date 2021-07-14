import React from "react";
import { Typography } from "@material-ui/core";
import "./Home.css";
import RellaxWrapper from "react-rellax-wrapper";
import Fade from "react-reveal/Fade";

function Home() {
  return (
    <div id="home" className="home">
      <div>
        <div className="home_left">
          <RellaxWrapper speed={7} className="wrapper">
            <img src="/Images/shape1.png" alt="shape" className="shape1" />
          </RellaxWrapper>
          <RellaxWrapper speed={4} className="wrapper">
            <img src="/Images/shape3.png" alt="shape" className="shape2" />
          </RellaxWrapper>
          <Fade top>
            <Typography variant="subtitle1" className="typo1">
              Welcome to my world
            </Typography>
            <Typography variant="h3" className="typo2">
              Hi, I'm Faiz Shahnawaz
            </Typography>
            <Typography variant="h3" className="typo3">
              Front-End Developer
            </Typography>
            <Typography variant="h3" className="typo2">
              based in Pakistan.
            </Typography>
          </Fade>
        </div>
        <Fade bottom>
          <div className="home_right">
            <img src="/Images/Untitled design (7).png" alt="faiz-shahnawaz" />
          </div>
        </Fade>
      </div>

    </div>
  );
}

export default Home;
