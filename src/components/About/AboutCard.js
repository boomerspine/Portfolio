import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone I am <span className="purple">Reekraj Roy </span>
            from <span className="purple"> Kolkata, India.</span>
            <br></br>
            <br />I am a pre-final year student at Sikkim Manipal Institute of Technology
            purusing a B.Tech in computer science with a minor specialization in artificial intelligence.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading fiction
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Connecting with people
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "As we code, so shall we leap!"{" "}
          </p>
          <footer className="blockquote-footer">Reekraj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
