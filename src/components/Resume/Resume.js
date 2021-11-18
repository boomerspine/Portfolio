import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/ReekrajRoyResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Web Development Intern @ AasPass - Global to Local"
              date="June 2021 — Sep 2021"
              content={[
                "Worked in the pre-existing site.",
                "Built home page using HTML, CSS, JavaScript, tailwind css and tailblocks.",
              ]}
            />
            <Resumecontent
              title="Software Engineering Intern @ Lucid Education Group"
              date="Jan 2021 — April 2021"
              content={[
                "Deployed websites using HTML, CSS, JavaScript and PHP.",
                "Designed an user authentication dashboard using xampp, MariaDB and PHP.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Technical Manager @ INNOVISION"
              content={[
                "Head of the technical  department for the session 2021-22",
                "Posted curated content related to opportunities related to different domains",
              ]}
            />
            <Resumecontent
              title="Editorial Department @ TEDxSMIT 2019 Edition"
              content={[
                "Contributed several articles for the social media team",
                "Made detailed report on the speakers story",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Sikkim Manipal Institute of Technology "
              date="July, 2019 - Aug, 2023 (Expected)"
              content={[`CGPA: ${9.69} (Till ${4}th Sem)`]}
            />
            <Resumecontent
              title="Delhi Public School Megacity, Kolkata"
              date="April, 2009 - March, 2019"
              content={["ISC Aggregate Precentage: 92.50%",
              "ICSE Aggregate Precentage: 96.40%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Selected for AWS MLE Foundations course offered by Udemy in collaboration with AWS`,
                `Completed HacktoberFest 2020 with submission of 6 pull requests`,
                "State Bank Honorary Award for meritorious students.",
                "Highest scorer in Computer Science (ICSE).",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
