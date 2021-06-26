import { Button } from "@material-ui/core";
import React from "react";
import Drawer from "./drawer";
import "./Navbar.css";
import { RiFacebookFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTwitterFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";

function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        {window.innerWidth > 800 ? (
          <span>
            <a href="#home" className="link">
              Home
            </a>
            <a href="#About" className="link">
              About
            </a>{" "}
            <a href="#Service" className="link">
              Service
            </a>{" "}
            <a href="#Portfolio" className="link">
              Portfolio
            </a>{" "}
            <a href="#Contact" className="link">
              Contact
            </a>
          </span>
        ) : (
          false
        )}
      </div>
      <div className="social_links">
        <a
          href="https://www.facebook.com/M.faiz.raza.21"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiFacebookFill className="social_icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/faiz-raza-69835a166/1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiLinkedinFill className="social_icon" />
        </a>
        <a
          href="https://www.instagram.com/m_faiz_shahnawaz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram className="social_icon" />
        </a>
        <a
          href="https://twitter.com/FaizShahnawaz1?s=09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiTwitterFill className="social_icon" />
        </a>
        <a
          href="https://github.com/faiz260"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="social_icon" />
        </a>
      </div>
      {window.innerWidth > 800 ? (
        <Button variant="outlined" className="nav_contact_button">
          Contact now
        </Button>
      ) : (
        <Drawer />
      )}
    </div>
  );
}

export default Navbar;
