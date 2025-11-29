import React from "react";
import { Col, Row } from "react-bootstrap";

// ---- ALL FILE NAMES LOWERCASE ----
import javascript from "../../assets/techicons/javascript.svg";
import node from "../../assets/techicons/node.svg";
import reactIcon from "../../assets/techicons/react.svg";
import mongo from "../../assets/techicons/mongo.svg";
import redux from "../../assets/techicons/redux.svg";
import git from "../../assets/techicons/git.svg";
import sql from "../../assets/techicons/sql.png";
import python from "../../assets/techicons/python.svg";
import tailwind from "../../assets/techicons/tailwind.svg";
import mui from "../../assets/techicons/mui.svg";
import postman from "../../assets/techicons/postman.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={javascript} alt="javascript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={node} alt="nodejs" />
        <div className="tech-icons-text">Node.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={reactIcon} alt="react" />
        <div className="tech-icons-text">React</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={mongo} alt="mongodb" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={redux} alt="redux" />
        <div className="tech-icons-text">Redux</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img className="iconsql" src={sql} alt="sql" />
        <div className="tech-icons-text">SQLite</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={python} alt="python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={tailwind} alt="Tailwind CSS" />
        <div className="tech-icons-text">Tailwind</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={mui} alt="material ui" />
        <div className="tech-icons-text">Material UI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={postman} alt="postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>

    </Row>
  );
}

export default Techstack;
