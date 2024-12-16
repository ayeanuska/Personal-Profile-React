import React from "react";

const Skills = () => {
  return (
    <>
      {" "}
      <section className="skills">
        <h2 className="tittle">
          <span>Skills</span>
        </h2>
        <div className="container flex skills-container" id="skills">
          <div>
            <i className="fa-brands fa-html5" style={{ color: "orange" }}></i>
            <span> HTML5</span>
          </div>
          <div>
            <i className="fa-brands fa-css3-alt" style={{ color: "blue" }}></i>
            <span> CSS3</span>
          </div>
          <div>
            <i className="fa-brands fa-js" style={{ color: "yellow" }}></i>
            <span> JavaScript</span>
          </div>
          <div>
            <i className="fa-brands fa-github" style={{ color: "black" }}></i>
            <span>GitHUb</span>
          </div>
          <div>
            <i
              className="fa-brands fa-figma"
              style={{ color: "rgba(97, 15, 113, 0.221)" }}
            ></i>
            <span>Figma</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
