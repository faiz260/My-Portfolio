import React from "react";
import { Typography, Paper, Button } from "@material-ui/core";
import "./Portfolio.css";

function Service() {
  return (
    <div className="portfolio" id="Portfolio">
      <div className="portfolio_header">
        <Typography variant="h2" className="portfolio_head">
          My Latest Projects
        </Typography>
        <Typography variant="subtitle1" className="portfolio_text">
          Here you will find some of my latest projects to get a better idea of
          my work.
        </Typography>
      </div>
      <div className="portfolio_cards">
        <Paper variant={2} className="portfolio_card">
          <img src="/Images/app-back.png" className="portfolio_card_img"></img>
          <Typography variant="h2" className="portfolio_card_head">
            Amazon Clone
          </Typography>
          <Typography variant="subtitle1" className="portfolio_card_text">
            Clone of the Amazon Web app using ReactJS, Redux, Material-UI and
            CSS.
          </Typography>
          <Button
            href="https://clone-5145b.web.app/"
            target="_blank"
            variant="outlined"
            className="portfolio_card_btn"
          >
            View
          </Button>
        </Paper>
        <Paper variant={2} className="portfolio_card">
          <img src="/Images/app-back2.png" className="portfolio_card_img"></img>
          <Typography variant="h2" className="portfolio_card_head">
            Covid-19 Tracker App
          </Typography>
          <Typography variant="subtitle1" className="portfolio_card_text">
            A classic COVID-19 Tracker application with ReactJS, Material-UI,
            CSS, Chart.js, leaflet and hosted on Firebase.
          </Typography>
          <Button
            href="https://covid-19-tracker-45826.web.app/"
            target="_blank"
            variant="outlined"
            className="portfolio_card_btn"
          >
            View
          </Button>
        </Paper>
        <Paper variant={2} className="portfolio_card">
          <img
            src="/Images/Screenshot from 2021-07-01 23-45-03.png"
            className="portfolio_card_img"
          ></img>
          <Typography variant="h2" className="portfolio_card_head">
            Banking application UI
          </Typography>
          <Typography variant="subtitle1" className="portfolio_card_text">
            A fully responsive, eye catching and user friendly UI for a banking
            application using ReactJS and CSS.
          </Typography>
          <Button
            href="https://banking-app-ui.netlify.app/"
            target="_blank"
            variant="outlined"
            className="portfolio_card_btn"
          >
            View
          </Button>
        </Paper>
      </div>
    </div>
  );
}

export default Service;
