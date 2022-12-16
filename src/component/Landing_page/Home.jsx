import React from "react";
import "./Home.css";
import { motion } from "framer-motion";

export const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.4,
      delay: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

export const item = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: { opacity: 0, x: -100 },
};
function Home() {
  return (
    <div className="home">
      <motion.div
        className="home__box min__height"
        variants={list}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={item} className="home__text text-primary">
          Hi, I'm a
        </motion.p>
        <motion.h1 variants={item} className=" ">
          Software Engineer.
        </motion.h1>
        <motion.h1 variants={item} className=" love text-muted">
          I Love Building Web Apps
        </motion.h1>
        <motion.p variants={item} className="home__interest">
          I'm a computer science major and i have a lot of interest in solving
          problems and trying new technologies out.
        </motion.p>
        <motion.a
          variants={item}
          href="https://www.linkedin.com/in/robert-quartey-772b69193/"
          className="btn btn-outline-primary home__linkedin"
        >
          LinkedIn
        </motion.a>
      </motion.div>
    </div>
  );
}

export default Home;
