import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="header container flex">
          <div className="logo flex">
            <div>Anuska</div>
            <div className="line">Full stack dev.</div>
          </div>
          <div className="menu">
            <ul className="flex navigation">
              <li>
                <Link to="/hero">Home</Link>
                {/* <a href="/hero">Home</a> */}
              </li>
              <li>
                <Link to="/skills">Skills</Link>

                {/* <a href="/skills">Skills</a> */}
              </li>
              <li>
                <Link to="/projects">Projects</Link>

                {/* <a href="/projects">Projects</a> */}
              </li>
              <li>
                <Link to="/about">About</Link>

                {/* <a href="/about">About</a> */}
              </li>
              <li>
                <Link to="/contact">Contact</Link>

                {/* <a href="/contacts">Contact</a> */}
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
