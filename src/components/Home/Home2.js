import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profilepic from "../../Assets/profilepic.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="green">  </span> 
            </h1>
            <p className="home-about-body">
              I am a detail-oriented Software Engineer passionate about programming devices, learning and researching on new Technologies such as Artificial Intelligence/Machine Learning. 
              <br />
              <br /> I relish the opportunity to take my programming skills and experience to a company where I can continue to learn and grow as a professional software developer.
              <i>
                <b className="green"> For every project I undertake, my goal is to best enlist my audience for an effective user experience. </b>
              </i>
              <br />
              <br />
              I am interested in &nbsp;
              <i>
                <b className="green">Embedded Software Development </b> and
                also in areas related to{" "}
                <b className="green">
                  Machine Learning.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="green">Node.js</b> and
              <i>
                <b className="green">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="green"> React.js </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={profilepic} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>WHERE TO CONTACT ME</h1>
            <p>
              You can <span className="purple">contact </span> me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Honorinenn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/honorine_nn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/honorine-ndom-ndzah-79347787/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/honibel8/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
