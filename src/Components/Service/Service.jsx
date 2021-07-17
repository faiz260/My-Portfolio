import React from "react";
import { Typography, Paper } from "@material-ui/core";
import "./Service.css";
import { FiMonitor } from "react-icons/fi";
import { ImStack } from "react-icons/im";
import { SiAzuredevops } from "react-icons/si";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

function Service() {
  return (
    <div className="service" id="Service">
      <div className="service_header">
        <Fade bottom>
          <Typography variant="h2" className="service_head">
            My Awesome Services
          </Typography>
        </Fade>
        <Typography variant="subtitle1" className="service_text">
          <Fade bottom>
            The valuable services that I offer with my skillset to add value to
            your bussiness and scale your bussiness.
          </Fade>
        </Typography>
      </div>
      <div className="service_cards">
        <Slide right>
          <Paper variant={2} className="card">
            {/* <FiMonitor className="card_icon" /> */}
            <img
              src="/Images/monitor.png"
              alt="web-design"
              className="card_icon"
            />
            <Typography variant="h2" className="card_head">
              Front-end Development
            </Typography>
            <Typography variant="subtitle1" className="card_text">
              I develop front-end for the web apps that will attract more users.
              I will turn your design into reality with super responsiveness.
            </Typography>
          </Paper>
        </Slide>
        <Slide right>
          <Paper variant={2} className="card">
            {/* <ImStack className="card_icon" /> */}
            <img
              src="/Images/cube-of-notes-stack.png"
              alt="web-design"
              className="card_icon"
            />
            <Typography variant="h2" className="card_head">
              Full Stack development
            </Typography>
            <Typography variant="subtitle1" className="card_text">
              The stack you need to grow your bussiness will be done by me, with
              the latest stack in my skillse.
            </Typography>
          </Paper>
        </Slide>
        <Slide right>
          <Paper variant={2} className="card">
            {/* <SiAzuredevops className="card_icon" /> */}
            <img
              src="/Images/web-design.png"
              alt="web-design"
              className="card_icon"
            />
            <Typography variant="h2" className="card_head">
              Web Design
            </Typography>
            <Typography variant="subtitle1" className="card_text">
              I have a very unique and creative designs for your bussiness,
              personal or any kind of app that will stick the eye balls of the
              users on it.
            </Typography>
          </Paper>
        </Slide>
      </div>
    </div>
  );
}

export default Service;
