import React from "react";
// import Slide from "react-reveal/Slide";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__box min__height">
        {/* <Slide left> */}
          <p className="home__text text-primary">Hi, I'm a</p>
          <h1 className=" ">Software Engineer.</h1>
          <h1 className=" love text-muted">I Love Building Web Apps </h1>
          <p className="home__interest">
            I'm a computer science major and i have a lot of interest in solving
            problems and trying new technologies out.
          </p>
          <a href="https://www.linkedin.com/in/robert-quartey-772b69193/" className="btn btn-outline-primary home__linkedin">
            LinkedIn
          </a>
        {/* </Slide> */}
      </div>
    </div>
  );
}

export default Home;
