import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import impressme from "../../Assets/Projects/impressme.png";
import pinko from "../../Assets/Projects/pinko.png";
import workout from "../../Assets/Projects/workout.png";
import musictrivia from "../../Assets/Projects/musictrivia.png";
import weather from "../../Assets/Projects/weather.png";
import booksearch from "../../Assets/Projects/booksearch.png";
import notetaker from "../../Assets/Projects/notetaker.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          I recently worked on the following projects:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={impressme}
              isBlog={false}
              title="Impress ME"
              description="Impress ME is an influencer platform which focuses on the sharing of products by various organizations or individuals from all categories and domains of works. In this app users can share an existing product or a new product and have followers comment and follow their post."
              link="https://impress-me-app.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pinko}
              isBlog={false}
              title="PINKO"
              description="PinKO is a photo sharing platform that focuses on clothing. PinKO also has a clothing store in which users can make purchases through the use of PayPal."
              link="https://mysterious-gorge-30415.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={workout}
              isBlog={false}
              title="Workout Tracker"
              description="The workout tracker Application which enables the user to be able to view, create, and track daily workouts. This fitness workout app is built in consideration with the MVC standards and it takes in new exercises and uses MongoDB with Mongoose to log the user to the database. "
              link="https://workout-tracker-hn.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={musictrivia}
              isBlog={false}
              title="Music Trivia"
              description="This application is a Music trivia game app, where the user is provided with a lyric, the user then guesses the song. The user has to answer a series of questions where, each song they get correct increases their score and their score is saved on the leaderboard."
              link="https://github.com/BCole37/Project-1-Music-Trivia"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Dashboard"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://honorinenn.github.io/Weather-Dash-Board/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={booksearch}
              isBlog={false}
              title="API Book Search Engine"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://book-search-engine-hn.herokuapp.com/ "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notetaker}
              isBlog={false}
              title="Note Taker"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://note1t.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
