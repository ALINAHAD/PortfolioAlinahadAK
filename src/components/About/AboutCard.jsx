import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Alinahad AK</span>{" "}
            from <span className="purple">Kerala, India</span>.
            <br />
            <br />
            Right now, I’m sharpening my skills through a{" "}
            <span className="purple">MERN Stack Development </span>certification program at{" "}
            <span className="purple">NxtWave</span>.
            <br/>
            <br/>
            I’m an{" "}
            <span className="purple">Electronics and Communication Engineering</span> graduate from{" "}
            <span className="purple">CE Chengannur</span>.
            <br />
            <br />
            When I’m not coding, you’ll probably find me editing videos, making travel stories, or just exploring creative ways to blend tech and storytelling.
          </p>

          

          <p style={{ color: "rgb(155 126 172)", fontStyle: "italic" }}>
            "Grow by going beyond what you thought you could"{" "}
          </p>
          <footer className="blockquote-footer">Me</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
