import React from "react";
import Experience_card from "./Experience_card";
import jjay from "../../assets/images/jjay.jpeg";
import { motion } from "framer-motion";
import { list, item } from "../Landing_page/Home";
function Education() {
  const education = [
    {
      title: "John Jay College (CUNY).",
      date: "August 2013 - present.",
      details: "Bachelor's degree, Computer Science",
      imageURL: jjay,
    },
  ];

  return (
    <div>
      <motion.div
        className="education__card"
        variants={list}
        initial="hidden"
        animate="visible"
      >
        {education.map((element) => {
          return (
            <motion.div variants={item}>
              <Experience_card
                key={element.title}
                title={element.title}
                date={element.date}
                imageURL={element.imageURL}
                details={element.details}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Education;
