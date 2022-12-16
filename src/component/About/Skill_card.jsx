import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

import Card from "react-bootstrap/Card";

function Skill_card({ name, imageURL }) {
  return (
    <div className="skills__card  ">
      <div className="Skills__card__img">
        <img src={imageURL} className="img-fluid"/>
      </div>
      <div>
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default Skill_card;
