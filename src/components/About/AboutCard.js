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
            <br />

            <br />
            <br />
            Software Engineer leveraging Quality Assurance Engineering background to build a more constitutive user experience for a software. 

          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Front-end: HTML5, CSS, JQuery, JavaScript, Bootstrap, ReactJS, Semantic UI, UIkit  
            </li>
            <li className="about-activity">
              <ImPointRight /> Back-end:  SQL, MySQL, NoSQL, MongoDB, DynamoDB Express, Node.js, Handlebars, AWS, REST API, GraphQL, Python, Java, Spring boot, Spring MVC, Microservices 
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> 
            </li> */}
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
