import { Button, Link } from "@material-ui/core";
import React from "react";
import Drawer from "./drawer";
import "./Navbar.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import { RiFacebookFill } from "react-icons/ri";

function Navbar() {
  const preventDefault = (event) => event.preventDefault();
  console.log(window.innerWidth);
  console.log(window.outerWidth);
  return (
    <div className="navbar">
      <div className="links">
        {window.innerWidth > 800 ? (
        <span>
          <a href="#home" onClick={preventDefault}>
            Home
          </a>
          <a href="#" onClick={preventDefault}>
            About
          </a>{" "}
          <a href="#" onClick={preventDefault}>
            Service
          </a>{" "}
          <a href="#" onClick={preventDefault}>
            Portfolio
          </a>{" "}
          <a href="#" onClick={preventDefault}>
            Contact
          </a>
        </span>
        ) : (
          false
        )}
      </div>
      <div className="social_links">
        <RiFacebookFill className="social_icon" />
        <RiFacebookFill className="social_icon" />
        <RiFacebookFill className="social_icon" />
        <RiFacebookFill className="social_icon" />
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
