import React from "react";
import { Typography } from "@material-ui/core";
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
                Education
              </Typography>
            </Fade>
            <Fade bottom>
              <div>
                <Typography variant="subtitle1" className="edu_text">
                  {" "}
                  <strong> BSCS </strong>- Bahria University Karachi Campus
                  <br /> 2020 - Current
                </Typography>

                <Typography variant="subtitle1" className="edu_text">
                  {" "}
                  <strong> Intermediate </strong>- DJ Sindh Government Science
                  College <br /> 2017 - 2019
                </Typography>
                <Typography variant="subtitle1" className="edu_text">
                  {" "}
                  <strong> School </strong>- Tayyab Ali A Alavi Boys Secondary
                  School <br /> 2017
                </Typography>
                <Typography variant="subtitle1" className="edu_text">
                  {" "}
                  <strong> Mobile and Web Development </strong>- Axiom
                  Educations
                  <br /> 2019
                </Typography>
              </div>
            </Fade>
          </div>
          <div className="education">
            <Fade bottom>
              <Typography variant="h2" className="main_skills_head">
                Experience
              </Typography>
            </Fade>
            <Fade bottom>
              <div>
                <Typography variant="subtitle1" className="edu_text">
                  {" "}
                  I have a <strong> 2 years </strong>experience in React JS.
                </Typography>
                <Typography variant="subtitle1" className="edu_text">
                  {" "}
                  Expertise in Front End development.
                </Typography>
                <Typography variant="subtitle1" className="edu_text">
                  {" "}
                  Have build several projects using different tools and
                  technologies with React JS like Redux, Redux Toolkit, Mirage,
                  Material UI, React Bootstrap, Web Animations and much more.
                </Typography>
                <Typography variant="subtitle1" className="edu_text">
                  {" "}
                  Have a strong grip on writing custom CSS and making web pages
                  more attractive.
                </Typography>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
