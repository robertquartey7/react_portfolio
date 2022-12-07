import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

import Card from "react-bootstrap/Card";

function Skill_card({ title, description, imageURL, progressBar }) {
  return (
    <Card style={{ width: "18rem" }} className="bg__cardcolor ">
      <Card.Img variant="top" src={imageURL} className="skill__image" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {/* <ProgressBar percent={progressBar}></ProgressBar> */}
      </Card.Body>
    </Card>
  );
}

export default Skill_card;
