import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { Avatar } from "@mui/material";
import { list, item } from "../Landing_page/Home";
import { motion } from "framer-motion";
function Navbar() {
  return (
    <motion.nav
      class="navbar navbar-expand-md navbar-dark bg-dark sticky-top"
      variants={list}
      initial="hidden"
      animate="visible"
    >
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
      <motion.h1 variants={item} className="nav__name text__white">
        Robert Quartey
      </motion.h1>
      <div
        class="collapse navbar-collapse nav__body"
        id="navbarSupportedContent"
      >
        {/* top section of the navbar */}
        <motion.div
          variants={list}
          className="top__nav container"
          initial="hidden"
          animate="visible"
        >
          <motion.a variant={item} class="navbar-brand" href="#">
            <img src={logo} alt="" class="logo__image" data-tilt />
          </motion.a>
          <motion.p variants={item} className="text__white text-center">
            Hi, my name is Robert Quartey and I'm a senior software engineer.
            Welcome to my personal website!
          </motion.p>
          <motion.div variants={item} class="socials">
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
          </motion.div>
        </motion.div>
        <div className="hr"></div>
        <motion.div variants={item} class="navbar__menulinks ">
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
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
