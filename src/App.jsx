import "./App.css";

import anu from "./assets/anu.jpeg";
import recipeGallery from "./assets/recipeGallery.png";
import notToDoList from "./assets/notToDoList.png";
import tempConverter from "./assets/tempConverter.png";
import prankCalc from "./assets/PrankCalculator.png";

function App() {
  return (
    <>
      {/* <!-- --darkmode toggler-- --> */}

      <input type="checkbox" id="mode" />

      <div className="wrapper">
        <label htmlFor="mode">
          {" "}
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>
        {/* <!-- --nav bar-- --> */}
        <header>
          <div className="header container flex">
            <div className="logo flex">
              <div>Anuska</div>
              <div className="line">Full stack dev.</div>
            </div>
            <div className="menu">
              <ul className="flex navigation">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Skills</a>
                </li>
                <li>
                  <a href="">Projects</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        {/* <!-- --hero section-- --> */}
        <section className="hero-section container">
          <div className="grid hero">
            <div className="left flex">
              <div>
                Hi I`m <br />
                <span>Anuska Shrestha</span>
              </div>
              <div className="tag">Full stack developer</div>
              <p>
                with a creative mindset, currently learning to become a skilled
                full-stack developer. Always exploring new technologies and
                building connections
              </p>
              <div>
                <a href={anu}>
                  <button>
                    Download Cv <i className="fa-solid fa-download"></i>
                  </button>
                </a>
              </div>
            </div>
            <div className="right flex">
              <img src={anu} alt="anuska's img" />
            </div>
          </div>
        </section>
        {/* <!--  banner--  --> */}

        <section className="banner flex container">
          <div className="flex info-content">
            <div className="flex-centre icon-container">
              <i className="fa-solid fa-award"></i>
            </div>
            <div>
              <span> IT</span>
              <p>Graduation</p>
            </div>
          </div>

          <div className="info-divider"></div>

          <div className="flex info-content">
            <div className="flex-centre icon-container">
              <i className="fa-solid fa-award"></i>
            </div>
            <div>
              <span> 5+ Projects</span>
              <p>Completed</p>
            </div>
          </div>

          <div className="info-divider"></div>

          <div className="flex info-content">
            <div className="flex-centre icon-container">
              <i className="fa-solid fa-award"></i>
            </div>
            <div>
              <span>1+ year</span>
              <p>Experience</p>
            </div>
          </div>
        </section>

        {/* <!-- -skills--> */}
        <div className="skills">
          <h2 className="tittle">
            <span>Skills</span>
          </h2>
          <div className="container flex skills-container">
            <div>
              <i className="fa-brands fa-html5" style={{ color: "orange" }}></i>
              <span> HTML5</span>
            </div>
            <div>
              <i
                className="fa-brands fa-css3-alt"
                style={{ color: "blue" }}
              ></i>
              <span> CSS3</span>
            </div>
            <div>
              <i className="fa-brands fa-js" style={{ color: "yellow" }}></i>
              <span> JavaScript</span>
            </div>
            <div>
              <i className="fa-brands fa-github" style={{ color: "black" }}></i>
              <span>GitHUb</span>
            </div>
            <div>
              <i
                className="fa-brands fa-figma"
                style={{ color: "rgba(97, 15, 113, 0.221)" }}
              ></i>
              <span>Figma</span>
            </div>
          </div>
        </div>

        {/* <!-- --projects-- --> */}
        <section className="projects container">
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

        {/* <!-- --about me-- --> */}

        <section className="about">
          <h2 className="tittle">
            <span>About me</span>
          </h2>

          <div className="container flex about-content">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                dicta voluptatum perspiciatis sed rerum explicabo, quisquam illo
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

        {/* <!-- contact-- --> */}
        <section className="contact container">
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
        {/* <!-- footer section-- --> */}
        <footer className="flex-centre">
          <div className="top flex">
            <div className="footer-links">
              <h3>Links</h3>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Skills</a>
                </li>
                <li>
                  <a href="">Projects</a>
                </li>
                <li>
                  <a href="">Contact</a>
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
      </div>
    </>
  );
}

export default App;
