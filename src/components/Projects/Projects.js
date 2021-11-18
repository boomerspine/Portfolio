import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import apna from "../../Assets/Projects/apna.gif";
import chatbot from "../../Assets/Projects/chatbot.png";
import face from "../../Assets/Projects/face.gif";
import Superchat from "../../Assets/Projects/superchat.gif";
import editor from "../../Assets/Projects/editor.gif";
import Amazon from "../../Assets/Projects/amazon.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Superchat}
              isBlog={false}
              title="Superchat"
              description="This is a chatting application built using Reactjs. Dependencies like @ant-design, axios and react-chat-engine were used. User can create multiple chat rooms, get sound notification, send text, images, etc. The backend implemented using chat engine."
              link="https://github.com/boomerspine/Chat-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apna}
              isBlog={false}
              title="Apna Search"
              description="A web searching application similar to Google Search where user can search anything and get corresponding results, images, news, and videos.
                          The project has been made using Reactjs, Tailwind CSS, and the search results are fetched using Google Search API from Rapid API."
              link="https://github.com/boomerspine/Apna-Search"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="Face-detection-model"
              description="This is a face detection model to detect live video using haarcascade_frontal face detection from OpenCV library in python. Greyscale still images can also be detected."
              link="https://github.com/boomerspine/Face-detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Amazon}
              isBlog={false}
              title="Amazon-price-tracker-app"
              description="JavaScript application which scrapes off prices from Amazon and sends email to the user when price of an item drops below a set threshold. Implemented using nightmare library and sendgrid api."
              link="https://github.com/boomerspine/Amazon-price-tracker-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Python IDE"
              description="A Python code editor to execute .py files. Facilities like saving of new files, opening existing file and compilation of code are provided. The gui has been designed using Tkinter and factory functions implemented by tkinter.filedialog and the subprocess module."
              link="https://github.com/boomerspine/Pyrun-editor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Self-learning Chatbot"
              description="This self learning chatbot is user interactive and gives information on quantum computing by scrapping article from Wikipedia. Natural language toolkit and newspaper3k have been used to extract articles. TfidfVectorizer from scikit learn has been used for conversion of matrix tf-idf features."
              link="https://github.com/boomerspine/selflearning_chatbot"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
