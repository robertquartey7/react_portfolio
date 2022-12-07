import React from "react";
import Skill_card from "./Skill_card";
import css3 from "../../assets/images/skills/css3.svg";
import django from "../../assets/images/skills/django.svg";
import flask from "../../assets/images/skills/flask.svg";
import html from "../../assets/images/skills/html.svg";
import python from "../../assets/images/skills/python.svg";
import javascript from "../../assets/images/skills/javascript.svg";
import react from "../../assets/images/skills/react.svg";

function Skills() {
  const skills = [
    {
      imageURL: css3,
      title: "lorem",
      description:
        "CSS describes how HTML elements are to be displayed on screen.",
      progressBar: 80,
    },
    {
      imageURL: django,
      title: "Django",
      description: "lorem dhf dnsdf sdg sfgs g sgiwr rnw t",
      progressBar: 20,
    },
    {
      imageURL: flask,
      title: "Flask",
      description: "lorem dhf dnsdf sdg sfgs g sgiwr rnw t",
      progressBar: 60,
    },
    {
      imageURL: python,
      title: "Python",
      description: "lorem dhf dnsdf sdg sfgs g sgiwr rnw t",
      progressBar: 70,
    },
    {
      imageURL: javascript,
      title: "Javascript",
      description: "lorem dhf dnsdf sdg sfgs g sgiwr rnw t",
      progressBar: 70,
    },
    {
      imageURL: react,
      title: "React",
      description: "lorem dhf dnsdf sdg sfgs g sgiwr rnw t",
      progressBar: 80,
    },
  ];

  return (
    <div className="skill-box container row gap-3">
      {skills.map((element, index) => (
        <Skill_card
          
          key={index}
          imageURL={element.imageURL}
          title={element.title}
          description={element.description}
          progressBar={element.progressBar}
        />
      ))}
    </div>
  );
}

export default Skills;
