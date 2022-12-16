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
      name: "Css3",
    
    },
    {
      imageURL: django,
      name: "Django",
  
    },
    {
      imageURL: flask,
      name: "Flask",
     
    },
    {
      imageURL: python,
      name: "Python",
     
    },
    {
      imageURL: javascript,
      name: "Javascript",
     
    },
    {
      imageURL: react,
      name: "React",
    
    },
  ];

  return (
    <div className="skills-box container row gap-3">
      {skills.map((element, index) => (
        <Skill_card
          
          key={index}
          imageURL={element.imageURL}
          name={element.name}
        
        />
      ))}
    </div>
  );
}

export default Skills;
