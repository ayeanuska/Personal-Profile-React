import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <!-- --darkmode toggler-- --> */}

      <input type="checkbox" id="mode" />

      <div className="wrapper">
        <label htmlFor="mode">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>

        {/* <!-- --nav bar-- --> */}
        <Navbar />

        {/* <!-- --hero section-- --> */}
        {/* <!--  banner--  --> */}
        <Hero />

        {/* <!-- -skills--> */}
        <Skills />

        {/* <!-- --projects-- --> */}
        <Project />

        {/* <!-- --about me-- --> */}
        <About />

        {/* <!-- contact-- --> */}
        <Contact />

        {/* <!-- footer section-- --> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
