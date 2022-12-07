import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCard({ title, description, imageLink, githubLink }) {
  
  return (
    <Card style={{ width: "18rem" }} className="bg__cardcolor ">
      <Card.Img variant="top" src={imageLink} className="skill__image" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <a href={githubLink}></a>
    </Card>
  );
}

export default ProjectCard;
