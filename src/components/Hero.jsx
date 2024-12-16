import React from "react";
import anu from "../assets/anu.jpeg";

const Hero = () => {
  return (
    <>
      <section class="hero-section container" id="hero">
        <div class="grid hero">
          <div class="left flex">
            <div>
              Hi I'm
              <span>Anuska Shrestha</span>
            </div>
            <div class="tag">Full stack developer</div>
            <p>
              with a creative mindset, currently learning to become a skilled
              full-stack developer. Always exploring new technologies and
              building connections
            </p>
            <div>
              <a href={anu}>
                <button>
                  Download Cv <i class="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
          </div>
          <div class="right flex">
            <img src={anu} alt="anuska's img" />
          </div>
        </div>
      </section>

      {/* <!--  banner--  --> */}

      <section class="banner flex container">
        <div class="flex info-content">
          <div class="flex-centre icon-container">
            <i class="fa-solid fa-award"></i>
          </div>
          <div>
            <span> IT</span>
            <p>Graduation</p>
          </div>
        </div>

        <div class="info-divider"></div>

        <div class="flex info-content">
          <div class="flex-centre icon-container">
            <i class="fa-solid fa-award"></i>
          </div>
          <div>
            <span> 5+ Projects</span>
            <p>Completed</p>
          </div>
        </div>

        <div class="info-divider"></div>

        <div class="flex info-content">
          <div class="flex-centre icon-container">
            <i class="fa-solid fa-award"></i>
          </div>
          <div>
            <span>1+ year</span>
            <p>Experience</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
