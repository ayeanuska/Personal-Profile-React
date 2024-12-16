import React from "react";
import anu from "../assets/anu.jpeg";

const About = () => {
  return (
    <>
      {" "}
      <section className="about">
        <h2 className="tittle">
          <span>About me</span>
        </h2>

        <div className="container flex about-content" id="about">
          <div className="flex-centre myimg">
            <img src={anu} alt="" width="100%" />
          </div>
          <div className="mybio container">
            <h2>Anuska Shrestha</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              consectetur aperiam optio!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dicta
              voluptatum perspiciatis sed rerum explicabo, quisquam illo
              reprehenderit doloribus?
            </p>
            <p>Sydney, Australia</p>
            <div>
              <div className="tag">Intrests</div>
              <div className="flex">
                <span>Art directing</span>
                <span>Coding</span>
                <span>Content Creating</span>
                <span>Singing</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
