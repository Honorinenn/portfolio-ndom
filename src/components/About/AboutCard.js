import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Honorine Ndom Ndzah</span>
            from <span className="purple"> Seattle, Washington.</span>
            <br />I am a Software Engineer based in 
            Seattle, WA.
            <br />
            <br />
            Software Engineer leveraging Quality Assurance Engineering background to build a more constitutive user experience for the software. Recently earned a certificate in Full Stack Development from the University of Washington, Seattle with newly developed skills in JavaScript, HTML, CSS, React.js, Node.js, SQL, MongoDB, dynamoDB, GraphQL, Java, Python, C#, AWS and responsive web design.

          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 
            </li>
            <li className="about-activity">
              <ImPointRight /> 
            </li>
            <li className="about-activity">
              <ImPointRight /> 
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Contribute to and improve daily patterns of life which rely on technology!"{" "}
          </p>
          <footer className="blockquote-footer">Honorine Ndom Ndzah</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
