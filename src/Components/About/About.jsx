import React from "react";
import { Typography } from "@material-ui/core";
import Slider from "./Slider";
import "./About.css";

function About() {
  return (
    <div className="about" id="About">
      <div className="about_me">
        <Typography variant="h2" className="about_me_head">
          About me
        </Typography>
        <Typography variant="subtitle1" className="about_me_text">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
          If you are going to use a passage of Lorem Ipsum,
        </Typography>
      </div>
      <div className="main_skills">
        <div>
          <Typography variant="h3" className="main_skills_head">
            Main Skills
          </Typography>
        </div>
        <div className="skills_div">
          <div>
            <Slider title="HTML" value="95" silderColor="#22c1c3" />
            <Slider title="CSS" value="95" silderColor="#F0F037" />
            <Slider title="JAVASCRIPT" value="90" silderColor="#2D8FC4" />
          </div>
          <div>
            <Slider title="React JS" value="90" silderColor="#DE3D93" />
            <Slider title="TYPESCRIPT" value="70" silderColor="#B641FA" />
            <Slider title="REDUX" value="90" silderColor="#6C30E4" />
          </div>
          <div>
            <Slider title="WEB ANIMATIONS" value="90" silderColor="#E33030" />
            <Slider title="PWA" value="70" silderColor="#E37130" />
            <Slider title="GRAPHQL" value="60" silderColor="#E3A730" />
          </div>
        </div>
        <div className="about_div3">
          <div className="education">
            <Typography variant="h2" className="main_skills_head">
              Education
            </Typography>
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
                <strong> Mobile and Web Development </strong>- Axiom Educations
                <br /> 2019
              </Typography>
            </div>
          </div>
          <div className="education">
            <Typography variant="h2" className="main_skills_head">
              Experience
            </Typography>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
