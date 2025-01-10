import React from "react";
import Title from "./Title";

const Contact = () => {
  return (
    <>
      {" "}
      <section className="contact container" id="contacts">
        <Title title="Contact Me" />
        <div className="social flex">
          <a href="" className="icon-box">
            <i className="fa-solid fa-mobile "></i>
          </a>{" "}
          <a href="" className="icon-box">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="" className="icon-box">
            <i className="fa-brands fa-github" style={{ color: "black" }}></i>
          </a>
          <a href="" className="icon-box">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
        <h3>or reach me out</h3>
        <div className="flex-centre">
          <a
            href="mailto:youremail@gmail.com"
            className="email-section flex-centre"
          >
            <span>youremail@gmail.com</span>
            <div className="email-icon flex-centre">
              <i className="fa-solid fa-paper-plane"></i>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
