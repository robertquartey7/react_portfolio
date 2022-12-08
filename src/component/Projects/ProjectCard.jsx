import { GitHub } from "@mui/icons-material";
import { useState } from "react";

function ProjectCard({ title, description, imageLink, githubLink }) {
   const [onHover, setOnHover ] = useState(false)
  return (
    <div  className={onHover ?"bg__cardcolor project__card blur" : "bg__cardcolor project__card"} onMouseOut={()=>setOnHover(false)} onMouseOver={()=>setOnHover(true)}>
      <div className="project__img__box">
        <img src={imageLink} alt="" className="img-fluid" />
      </div>
      <div className="p-4">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className={onHover? "btn btn-dark d-flex gap-1 project__links__hover": "project__links btn btn-dark d-flex gap-1 "}>
      <GitHub/>
      <a href={githubLink} >githubLink</a>
      </div>

    </div>
    
  );
}

export default ProjectCard;
