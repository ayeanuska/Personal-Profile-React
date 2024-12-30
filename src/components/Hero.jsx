import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import anu from "../assets/anu.jpeg";

const Hero = () => {
  return (
    <>
      <section className="hero-section" id="hero">
        <Container>
          <Row className="align-items-center">
            <Col
              lg={6}
              sm={12}
              className="text-center text-lg-start order-lg-1"
            >
              <h1>
                Hello I'm <span>Anuska Shrestha</span>
              </h1>
              <h3 className="tag">Full Stack Developer</h3>
              <p>
                Creative mindset, currently learning to become a skilled
                full-stack developer. Always exploring new technologies and
                building connections.
              </p>
              <Button variant="warning" href={anu} download>
                Download CV <i className="fa-solid fa-download"></i>
              </Button>
            </Col>
            <Col lg={6} sm={12} className="text-center order-lg-2">
              <img
                src={anu}
                alt="Anuska"
                className="img-fluid rounded hero-image "
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* <!--  banner--  --> */}
      <section class="banner flex container">
        <Container>
          <Row>
            <Col lg={4} sm={12} className="text-center">
              <div>
                <i className="fa-solid fa-award fa-3x mb-2"></i>
                <h4>IT</h4>
                <p>Graduation</p>
              </div>
            </Col>
            <Col lg={4} sm={12} className="text-center">
              <div>
                <i className="fa-solid fa-code fa-3x mb-2"></i>
                <h4>5+ Projects</h4>
                <p>Completed</p>
              </div>
            </Col>
            <Col lg={4} sm={12} className="text-center">
              <div>
                <i className="fa-solid fa-briefcase fa-3x mb-2"></i>
                <h4>1+ Year</h4>
                <p>Experience</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
