import React from "react";
import Experience_card from "./Experience_card";
import jjay from "../../assets/images/jjay.jpeg";
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
      <div className="education__card">
        {education.map((element) => {
          return (
            <Experience_card
              key={element.title}
              title={element.title}
              date={element.date}
              imageURL={element.imageURL}
              details={element.details}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Education;
