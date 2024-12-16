import React from "react";

const Contact = () => {
  return (
    <>
      {" "}
      <section className="contact container" id="contacts">
        <h2 className="tittle">
          <span>Contact me</span>
        </h2>
        <div className="social flex">
          <a href="">
            <i className="fa-brands fa-github" style={{ color: "black" }}></i>
          </a>
          <a href="">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="">
            <i className="fa-solid fa-mobile"></i>
          </a>
        </div>
        <h3>OR</h3>
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
