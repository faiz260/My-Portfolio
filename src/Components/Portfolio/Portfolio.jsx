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
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </Typography>
      </div>
      <div className="portfolio_cards">
        <Paper variant={2} className="portfolio_card">
          <img src="/Images/app-back.png" className="portfolio_card_img"></img>
          <Typography variant="h2" className="portfolio_card_head">
            Amazon Clone
          </Typography>
          <Typography variant="subtitle1" className="portfolio_card_text">
            There are many variations of passages of Lorem Ipsum available, but
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
            There are many variations of passages of Lorem Ipsum available, but
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
          <img src="/Images/app-back4.png" className="portfolio_card_img"></img>
          <Typography variant="h2" className="portfolio_card_head">
            React Animated App
          </Typography>
          <Typography variant="subtitle1" className="portfolio_card_text">
            There are many variations of passages of Lorem Ipsum available, but
          </Typography>
          <Button
            href="http://react-animated-app-faiz.surge.sh/"
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
