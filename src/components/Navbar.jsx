import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="header flex expand-lg sticky-top">
          <div className="logo flex">
            <div>Anuska</div>
            <div className="line">Full stack dev.</div>
          </div>
          <div className="menu">
            <ul className="flex navigation">
              <Link to="/hero">Home</Link>
              {/* <a href="/hero">Home</a> */}

              <Link to="/skills">Skills</Link>

              {/* <a href="/skills">Skills</a> */}

              <Link to="/projects">Projects</Link>

              {/* <a href="/projects">Projects</a> */}

              <Link to="/about">About</Link>

              {/* <a href="/about">About</a> */}

              <Link to="/contact">Contact</Link>

              {/* <a href="/contacts">Contact</a> */}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
