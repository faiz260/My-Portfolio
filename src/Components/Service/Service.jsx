import React from "react";
import { Typography, Paper } from "@material-ui/core";
import "./Service.css";
import { FiMonitor } from "react-icons/fi";
import { ImStack } from "react-icons/im";
import { SiAzuredevops } from "react-icons/si";

function Service() {
  return (
    <div className="service" id="Service">
      <div className="service_header">
        <Typography variant="h2" className="service_head">
          My Awesome Services
        </Typography>
        <Typography variant="subtitle1" className="service_text">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </Typography>
      </div>
      <div className="service_cards">
        <Paper variant={2} className="card">
          <FiMonitor className="card_icon" />
          <Typography variant="h2" className="card_head">
            Front-end Development
          </Typography>
          <Typography variant="subtitle1" className="card_text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </Typography>
        </Paper>
        <Paper variant={2} className="card">
          <ImStack className="card_icon" />
          <Typography variant="h2" className="card_head">
            Full Stack development
          </Typography>
          <Typography variant="subtitle1" className="card_text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </Typography>
        </Paper>
        <Paper variant={2} className="card">
          <SiAzuredevops className="card_icon" />
          <Typography variant="h2" className="card_head">
            DevOps
          </Typography>
          <Typography variant="subtitle1" className="card_text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </Typography>
        </Paper>
      </div>
    </div>
  );
}

export default Service;
