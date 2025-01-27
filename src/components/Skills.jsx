import React from "react";
import Title from "./Title";

const Skills = () => {
  return (
    <>
      <section className="skills">
        <Title title="Skills" />
        <div className="container flex skills-container" id="skills">
          <div>
            <i
              className="fa-brands fa-html5 skill-box"
              i
              style={{ color: "orange" }}
            ></i>
            <span> HTML5</span>
          </div>
          <div>
            <i
              className="fa-brands fa-css3-alt skill-box"
              style={{ color: "blue" }}
            ></i>
            <span> CSS3</span>
          </div>
          <div>
            <i
              className="fa-brands fa-js skill-box"
              style={{ color: "yellow" }}
            ></i>
            <span> JavaScript</span>
          </div>
          <div>
            <i
              className="fa-brands fa-react skill-box"
              style={{ color: "yellow" }}
            ></i>
            <span> React</span>
          </div>
          <div>
            <i
              className="fa-brands fa-github skill-box"
              style={{ color: "black" }}
            ></i>
            <span>GitHub</span>
          </div>
          <div>
            <i
              className="fa-brands fa-figma skill-box"
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
