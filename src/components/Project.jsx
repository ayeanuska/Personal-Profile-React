import React from "react";
import recipeGallery from "../assets/recipeGallery.png";
import notToDoList from "../assets/notToDoList.png";
import tempConverter from "../assets/tempConverter.png";
import prankCalc from "../assets/PrankCalculator.png";
import Title from "./Title";
import Card from "./Card";

const projects = [
  {
    image: "recipeGallery",
    github: "https://github.com/ayeanuska/Recipe-Page",
    title: "Recipe Gallery",
    descr: "Techstack, Html, Css, JavaScript",
  },
  {
    image: "notToDoList",
    github: "https://github.com/ayeanuska/Recipe-Page",
    title: "Not-To-Do-List",
    descr: "Techstack, Html, Css, JavaScript",
  },
  {
    image: "prankCalc",
    github: "https://github.com/ayeanuska/PrankCalculator",
    title: "Prank Calculator",
    descr: "Techstack, Html, Css, JavaScript",
  },
  {
    image: "tempConverter",
    github: "https://github.com/ayeanuska/TemperatureConverter",
    title: "Temperature Converter",
    descr: "Techstack, Html, Css, JavaScript",
  },
];

const Project = () => {
  return (
    <>
      <section className="projects container" id="projects">
        <Title title="Projects" />

        <div className="grid project-container">
          <Card />

          {projects.map((projects, i) => (
            <Card key={i} {...projects} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;
