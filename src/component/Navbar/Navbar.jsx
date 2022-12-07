import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { Avatar } from "@mui/material";
function Navbar() {
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <button
        class="navbar-toggler ml-5"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1 className="nav__name text__white">Robert Quartey</h1>
      <div
        class="collapse navbar-collapse nav__body"
        id="navbarSupportedContent"
      >
        {/* top section of the navbar */}
        <div className="top__nav container">
          <a class="navbar-brand" href="#">
            <img src={logo} alt="" class="logo__image" data-tilt />
          </a>
          <p className="text__white text-center">
            Hi, my name is Robert Quartey and I'm a senior software engineer.
            Welcome to my personal website!
          </p>
          <div class="socials">
            <a
              href="https://www.instagram.com/mccall.robert36/"
              target="_blank"
            >
              <i class="bi bi-instagram text-white"></i>
            </a>
            <a href="https://github.com/robertquartey7" target="_blank">
              <i class="bi bi-github text-white bi-10x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/robert-quartey-772b69193/"
              target="_blank"
            >
              <i class="bi bi-linkedin text-white"></i>
            </a>
          </div>
        </div>
        <div className="hr"></div>
        <div class="navbar__menulinks ">
          <Link class="" to="home" spy={true} smooth={true}>
            Home
          </Link>

          <Link class="" to="about" spy={true} smooth={true}>
            About
          </Link>

          <Link class="" to="projects" spy={true} smooth={true}>
            Projects
          </Link>

          <Link class="" to="contact" spy={true} smooth={true}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
