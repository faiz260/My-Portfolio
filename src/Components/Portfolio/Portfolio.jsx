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
          <Typography variant="h2" className="portfolio_card_head">
            Front-end Development
          </Typography>
          <Typography variant="subtitle1" className="portfolio_card_text">
            There are many variations of passages of Lorem Ipsum available, but
          </Typography>
          <Button variant="outlined" className="portfolio_card_btn">
            Contact now
          </Button>
        </Paper>
        <Paper variant={2} className="portfolio_card">
          <Typography variant="h2" className="portfolio_card_head">
            Front-end Development
          </Typography>
          <Typography variant="subtitle1" className="portfolio_card_text">
            There are many variations of passages of Lorem Ipsum available, but
          </Typography>
        </Paper>
        <Paper variant={2} className="portfolio_card">
          <Typography variant="h2" className="portfolio_card_head">
            Front-end Development
          </Typography>
          <Typography variant="subtitle1" className="portfolio_card_text">
            There are many variations of passages of Lorem Ipsum available, but
          </Typography>
        </Paper>
      </div>
    </div>
  );
}

export default Service;
