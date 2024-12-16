import React from "react";

const Card = ({ image, github, url, title, descr }) => {
  return (
    <>
      <div className="project-card">
        <div className="top">
          <img src={image} alt="recipe gallery " width="100%" />
        </div>

        <div className="bottom container">
          <div className="links">
            <a href={github} target="_blank">
              <i className="fa-brands fa-github" style={{ color: "black" }}></i>
            </a>

            <a href={url} target="_blank">
              <i className="fa-brands fa-chrome"></i>
            </a>
          </div>
          <h3>{title}</h3>
          <p>{descr}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
