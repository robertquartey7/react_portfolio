import React from "react";
import Experience_card from "./Experience_card";
import TTP from '../../assets/images/TTP.png'
import vngle from '../../assets/images/vngle.png'

function Experience() {
  const experience = [
    {
      title: "Software Engineer Intern at Vngle",
      date: "Jun 2022-Aug 2022. 3 Mos",
      details:
        " Collaborated with intern fellows to build a CMS system for Vngle to manage their media content",
      imageURL: vngle,
    },
    {
      title: " Web Developer student at NYC Tech Talent Pipeline.",
      date: "Jan 2022. 1 Mos",
      details:
        "   Learnt about Django and Collaborated with my teams to build project that will help get us a job.",
      imageURL: TTP,
    },
  ];
 
  return (
    <div>
      <div className="experience__box">
        <h1 className="experience__title">Experience</h1>
        <div className="experience__card">
          {experience.map((element) => (
            <Experience_card
              key={element.title}
              title={element.title}
              date={element.date}
              imageURL={element.imageURL}
              details={element.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
