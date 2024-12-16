import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="flex-centre">
        <div className="top flex">
          <div className="footer-links">
            <h3>Links</h3>
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contacts">Contact</a>
              </li>
            </ul>
          </div>
          <div className="socials">
            <h3>Social Links</h3>
            <ul>
              <li>
                <a href="">LinkedIn</a>
              </li>
              <li>
                <a href="">Github</a>
              </li>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Youtube</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          &copy; Copy right all reserved 2024 || Made by Anuska Shrestha
        </div>
      </footer>

      <a href="#hero">
        <div class="goUp flex-centre">
          <i class="fa-solid fa-chevron-up"></i>
        </div>
      </a>
    </>
  );
};

export default Footer;
