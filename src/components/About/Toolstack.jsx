import React from "react";
import { Col, Row } from "react-bootstrap";

import windowsOs from "../../assets/techicons/windows.png";
import chrome from "../../assets/techicons/googlechrome.svg";
import vsCode from "../../assets/techicons/vscode.svg";
import photoshop from "../../assets/techicons/photoshopicon.png";
import figma from "../../assets/techicons/figma.png";
import capcut from "../../assets/techicons/capcuticon.png";
import powerBi from "../../assets/techicons/powerbiicon.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={windowsOs} alt="Windows OS" className="tech-icon-images" />
        <div className="tech-icons-text">Windows OS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={chrome} alt="Google Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="VS Code" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={photoshop} alt="Photoshop" className="tech-icon-images" />
        <div className="tech-icons-text">Photoshop</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={figma} alt="Figma" className="tech-icon-images" />
        <div className="tech-icons-text">Figma</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={capcut} alt="Capcut" className="tech-icon-images" />
        <div className="tech-icons-text">CapCut</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={powerBi} alt="Power BI" className="tech-icon-images" />
        <div className="tech-icons-text">Power BI</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
