import React from "react";
import { Typography } from "@material-ui/core";
import "./Home.css";

function Home() {
  return (
    <div id="home" className="home">
      <div>
        <div className="home_left">
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
          <img
            src="/Images/Faiz-front-photo-removebg-preview (1).png"
            alt="faiz-shahnawaz"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
