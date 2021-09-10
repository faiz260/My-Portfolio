import React from "react";
import { Typography, Paper, Button } from "@material-ui/core";
import "./Portfolio.css";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const data = [
  {
    title: "SaaS App UI",
    desc: "A small clone of the Amazon website with add-to-cart functionality. The cart is functional as well where you will see the selected products and total bill.",
    img: "/Images/saas_ui.png",
    link: "https://saas-app-ui.netlify.app/",
  },
  {
    title: "YouRead Blog Website",
    desc: "A blog website created with Gatsby, Contentful, Netlify with CI/CD pipeline and gated content.",
    img: "/Images/YouRead.png",
    link: "https://youread.netlify.app/",
  },
  {
    title: "The Smart Solutions",
    desc: " A website for an umbrella company that works in different tech fields and provides solutions for day to day problems.",
    img: "/Images/smart-solutions.png",
    link: "https://www.the-smart-solutions.com/",
  },
  {
    title: "Portfolio Website",
    desc: "A perfect website for your portfolio to showcase your potential to the recruiters in a professional and efficient way.    ",
    img: "/Images/Portfolio.png",
    link: "https://portfolio-app-faiz.netlify.app/",
  },
  {
    title: "Covid-19 Tracker App",
    desc: " A classic COVID-19 Tracker application with ReactJS, Material-UI,CSS, Chart.js, leaflet and hosted on Firebase.",
    img: "/Images/app-back2.png",
    link: "https://covid-19-tracker-45826.web.app/",
  },
];

function Service() {
  return (
    <div className="portfolio" id="Portfolio">
      <div className="portfolio_header">
        <Fade bottom>
          <Typography variant="h2" className="portfolio_head">
            My Latest Projects
          </Typography>
        </Fade>
        <Typography variant="subtitle1" className="portfolio_text">
          <Fade bottom>
            {" "}
            Here you will find some of my latest projects to get a better idea
            of my work.
          </Fade>
        </Typography>
      </div>
      <div className="portfolio_cards">
        <Slide left>
          {data.map((data) => {
            return (
              <Paper
                variant={2}
                className="portfolio_card"
              >
                <div
                  style={{ backgroundImage: `url(${data.img})` }}
                  className="portfolio_card_img"
                ></div>
                <Typography variant="h2" className="portfolio_card_head">
                  {data.title}
                </Typography>
                <Typography variant="subtitle1" className="portfolio_card_text">
                  {data.desc}
                </Typography>
                <Button
                  href={data.link}
                  target="_blank"
                  variant="outlined"
                  className="portfolio_card_btn"
                >
                  View
                </Button>
              </Paper>
            );
          })}
        </Slide>
      </div>
    </div>
  );
}

export default Service;
