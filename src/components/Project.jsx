import React from "react";
import recipeGallery from "../assets/recipeGallery.png";
import notToDoList from "../assets/notToDoList.png";
import tempConverter from "../assets/tempConverter.png";
import prankCalc from "../assets/PrankCalculator.png";

const Project = () => {
  return (
    <>
      {" "}
      <section className="projects container" id="projects">
        <h2 className="tittle">
          <span>My Projects</span>
        </h2>

        <div className="grid project-container">
          <div className="project-card">
            <div className="top">
              <img src={recipeGallery} alt="recipe gallery " width="100%" />
            </div>

            <div className="bottom container">
              <div className="links">
                <a href="https://github.com/ayeanuska/Recipe-Page">
                  <i
                    className="fa-brands fa-github"
                    style={{ color: "black" }}
                  ></i>
                </a>

                <a href="">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <h3>Recipe Gallery</h3>
              <p>Techstack, Html, Css, JavaScript</p>
            </div>
          </div>

          <div className="project-card">
            <div className="top">
              <img src={notToDoList} alt="Not-To-Do-List " width="100%" />
            </div>
            <div className="bottom container">
              <div className="links">
                <a href="https://github.com/ayeanuska/not-to-do-list">
                  <i
                    className="fa-brands fa-github"
                    style={{ color: "black" }}
                  ></i>
                </a>

                <a href="">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <h3>Not-To-Do-List</h3>
              <p>Techstack, Html, Css, JavaScript</p>
            </div>
          </div>
          <div className="project-card">
            <div className="top">
              <img src={prankCalc} alt="Prank Calc " width="100%" />
            </div>
            <div className="bottom container">
              <div className="links">
                <a href="https://github.com/ayeanuska/PrankCalculator">
                  <i
                    className="fa-brands fa-github"
                    style={{ color: "black" }}
                  ></i>
                </a>

                <a href="">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <h3>Prank Calculator</h3>
              <p>Techstack, Html, Css, JavaScript</p>
            </div>
          </div>
          <div className="project-card">
            <div className="top">
              <img
                src={tempConverter}
                alt="Temperature Converter "
                width="100%"
              />
            </div>
            <div className="bottom container">
              <div className="links">
                <a href="https://github.com/ayeanuska/TemperatureConverter">
                  <i
                    className="fa-brands fa-github"
                    style={{ color: "black" }}
                  ></i>
                </a>

                <a href="">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <h3>Temperature Converter</h3>
              <p>Techstack, Html, Css, JavaScript</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
