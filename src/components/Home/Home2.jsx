import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a MERN Stack Developer passionate about building clean, efficient, and user-friendly digital solutions. I love transforming ideas into seamless web experiences that are both visually appealing and highly functional. With a strong focus on modern web technologies and problem-solving, I strive to craft solutions that enhance usability and performance.

              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Python, Node.js, and MongoDB{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
            Beyond development, I also enjoy content creation and video editing as a creative outlet — allowing me to blend technical precision with visual storytelling. This combination helps me approach projects with both an analytical and artistic mindset, ensuring every product I create connects effectively with its audience.
              <i>
                <b className="purple">
                  {" "}
                
                </b>
              </i>
             
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
