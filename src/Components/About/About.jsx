import React from "react";
import { Typography, Paper } from "@material-ui/core";
import Slider from "./Slider";
import "./About.css";
import AboutMe from "./AboutMe";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import { FaArrowCircleUp } from "react-icons/fa";

function About() {
  return (
    <div className="about" id="About">
      <a href="#home">
        <FaArrowCircleUp className="top_button" />
      </a>
      <AboutMe />
      <div className="main_skills">
        <div>
          <Fade bottom>
            <Typography variant="h3" className="main_skills_head">
              Main Skills
            </Typography>
          </Fade>
        </div>
        <div className="skills_div">
          <Slide right>
            <div>
              <Slider title="HTML" value="95" silderColor="#22c1c3" />
              <Slider title="CSS" value="95" silderColor="#F0F037" />
              <Slider title="JAVASCRIPT" value="90" silderColor="#2D8FC4" />
            </div>
          </Slide>
          <Slide top>
            <div>
              <Slider title="React JS" value="90" silderColor="#DE3D93" />
              <Slider title="TYPESCRIPT" value="70" silderColor="#B641FA" />
              <Slider title="REDUX" value="90" silderColor="#6C30E4" />
            </div>
          </Slide>
          <Slide left>
            <div>
              <Slider title="WEB ANIMATIONS" value="90" silderColor="#E33030" />
              <Slider title="PWA" value="70" silderColor="#E37130" />
              <Slider title="GRAPHQL" value="60" silderColor="#E3A730" />
            </div>
          </Slide>
        </div>
        <div className="about_div3">
          <div className="education">
            <Fade bottom>
              <Typography variant="h2" className="main_skills_head">
                Experience
              </Typography>
            </Fade>
            <Fade bottom>
              <div className="ex_cards">
                <Slide right>
                  <Paper variant={2} className="ex_card">
                    <div className="ex_card_head_div">
                      <Typography variant="h2" className="ex_card_head">
                        2 years experience
                      </Typography>
                    </div>
                    <img
                      src="/Images/react.png"
                      alt="web-design"
                      className="ex_card_icon"
                    />
                  </Paper>
                </Slide>
                <Slide right>
                  <Paper variant={2} className="ex_card">
                    <div className="ex_card_head_div">
                      <Typography variant="h2" className="ex_card_head">
                        Expertise in Front-End
                      </Typography>
                    </div>
                    <div>
                      <img
                        src="/Images/html.png"
                        alt="web-design"
                        className="ex_card_icon"
                      />
                      <img
                        src="/Images/css.png"
                        alt="web-design"
                        className="ex_card_icon"
                      />
                      <img
                        src="/Images/javascript.png"
                        alt="web-design"
                        className="ex_card_icon"
                      />
                    </div>
                  </Paper>
                </Slide>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
