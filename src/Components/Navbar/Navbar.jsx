import { Button, Link } from "@material-ui/core";
import React from "react";
import Drawer from "./drawer";
import "./Navbar.css";
import { RiFacebookFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiTwitterFill } from "react-icons/ri";

function Navbar() {
  const preventDefault = (event) => event.preventDefault();
  console.log(window.innerWidth);
  console.log(window.outerWidth);
  return (
    <div className="navbar">
      <div className="links">
        {window.innerWidth > 800 ? (
          <span>
            <a href="#home">Home</a>
            <a href="#About">About</a> <a href="#Service">Service</a>{" "}
            <a href="#Portfolio">Portfolio</a> <a href="#Contact">Contact</a>
          </span>
        ) : (
          false
        )}
      </div>
      <div className="social_links">
        <a href="https://www.facebook.com/M.faiz.raza.21" target="_blank">
          <RiFacebookFill className="social_icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/faiz-raza-69835a166/1"
          target="_blank"
        >
          <RiLinkedinFill className="social_icon" />
        </a>
        <a href="https://www.instagram.com/m_faiz_shahnawaz/" target="_blank">
          <AiOutlineInstagram className="social_icon" />
        </a>
        <a href="https://twitter.com/FaizShahnawaz1?s=09" target="_blank">
          <RiTwitterFill className="social_icon" />
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
