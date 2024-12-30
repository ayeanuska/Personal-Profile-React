import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

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

        <Routes>
          <Route path="/" element={<Hero />} />

          <Route path="/hero" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>

        {/* <!-- --hero section-- --> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
