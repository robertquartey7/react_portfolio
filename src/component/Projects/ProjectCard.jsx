import { GitHub, OpenInNew } from "@mui/icons-material";

function ProjectCard({ title, description, imageLink, githubLink, liveLink }) {
  return (
    <div className={"bg__cardcolor project__card"}>
      <div className="project__img__box">
        <img src={imageLink} alt="" className="img-fluid" />
      </div>
      <div className="">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project__social container">
          <a href={githubLink} target="_blank">
            <GitHub />
          </a>
          {liveLink && (
            <a href={""} target="_blank">
              <OpenInNew />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
