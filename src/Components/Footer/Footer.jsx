import React from "react";
import "./Footer.css";
import { RiFacebookFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTwitterFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

function Footer() {
  return (
    <div className="Footer">
      <Slide right>
        <div className="icons_div">
          <div className="icon_div">
            <a
              href="https://www.linkedin.com/in/faiz-raza-69835a166/1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiLinkedinFill className="icon" />
            </a>
          </div>
          <div className="icon_div">
            <a
              href="https://twitter.com/FaizShahnawaz1?s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiTwitterFill className="icon" />
            </a>
          </div>
          <div className="icon_div">
            <a
              href="https://github.com/faiz260"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="icon" />
            </a>
          </div>
        </div>
      </Slide>
      <Slide left>
        <div className="nav_div">
          <a href="#home" className="footer_link">
            Home
          </a>
          <a href="#About" className="footer_link">
            About
          </a>{" "}
          <a href="#Service" className="footer_link">
            Service
          </a>{" "}
          <a href="#Portfolio" className="footer_link">
            Portfolio
          </a>{" "}
          <a href="#Contact" className="footer_link last_link">
            Contact
          </a>
        </div>
      </Slide>
      <Fade bottom>
        <div className="credits">
          <AiOutlineCopyrightCircle className="c_icon" />
          Faiz Shahnawaz | All rights reserved
        </div>
      </Fade>
    </div>
  );
}

export default Footer;
