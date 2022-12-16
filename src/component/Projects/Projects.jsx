import React from "react";
import ProjectCard from "./ProjectCard";
import "./Project.css";
import {ProjectJson} from "./ProjectJson";

function Projects() {
  return (
    <div id="projects" className="min__height  projects">
      <h1 className="text-white">Some Things I've Built </h1>
      {/* <div className="text-white">Web Apps</div> */}
      <div className="project  ">{ProjectJson.map((element, index) => {

        return (
          <ProjectCard

          key={index}
          title={element.title}
          description={element.description}
          imageLink={element.imageLink}
          githubLink={element.gitHubLink}
        />
        )
      })}</div>
    </div>
  );
}

export default Projects;
