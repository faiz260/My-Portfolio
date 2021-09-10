import React from "react";
import { Typography, Paper } from "@material-ui/core";
import "./Service.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { FaMobileAlt } from "react-icons/fa";
import { TiClipboard } from "react-icons/ti";
import { GoGraph } from "react-icons/go";

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
        <Flip right>
          <Paper variant={2} className="card">
            <FaMobileAlt className="card_icon" />
            <Typography variant="h2" className="card_head">
              Responsiveness
            </Typography>
            <Typography variant="subtitle1" className="card_text">
              I develop websites that the user can open on any device of any
              screen size, your website's design will not break and it will
              adjust beautifully.
            </Typography>
          </Paper>
        </Flip>
        <Flip right>
          <Paper variant={2} className="card">
            <TiClipboard className="card_icon" />
            <Typography variant="h2" className="card_head">
              Creative Design
            </Typography>
            <Typography variant="subtitle1" className="card_text">
              I design aesthetically pleasing and appealing designs that will
              stick the user's eye balls on your website and they will stay
              longer on your page.
            </Typography>
          </Paper>
        </Flip>
        <Flip right>
          <Paper variant={2} className="card">
            <GoGraph className="card_icon" />
            <Typography variant="h2" className="card_head">
              Business Scalability
            </Typography>
            <Typography variant="subtitle1" className="card_text">
              My first priority is to scale the Businesses of my clients by the
              means of technology and latest tools that will help them grow
              potentially in thier Business.
            </Typography>
          </Paper>
        </Flip>
      </div>
    </div>
  );
}

export default Service;
