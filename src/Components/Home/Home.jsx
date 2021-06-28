import React from "react";
import { Typography } from "@material-ui/core";
import "./Home.css";

function Home() {
  return (
    <div id="home" className="home">
      <div>
        <div className="home_left">
          <img src="/Images/shape1.png" alt="shape" className="shape1" />
          <img src="/Images/shape3.png" alt="shape" className="shape2" />
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
        </div>
        <div className="home_right">
          <img src="/Images/Untitled design (7).png" alt="faiz-shahnawaz" />
        </div>
      </div>
      <div className="path_circle">
        <img src="/Images/path-circle.png" alt="path" />
      </div>
    </div>
  );
}

export default Home;
