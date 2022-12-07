import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import './About.css'
import Skills from "./Skills";

function About() {
  const experience = [];
 

  return (
    <div>
      <div className="about min__height" id="about">
        <h1 className="text__title">About</h1>
        <div className="about__box container">
          <div >
            <Experience></Experience>
          </div>

          <div>
            <h1 className="education__title">Education</h1>
            <div>
              <Education></Education>
            </div>
          </div>
        </div>
        <div>
          <h1>
            Skills
          </h1>
          <div className="gap-2 container">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
