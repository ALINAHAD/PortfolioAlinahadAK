import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Todo from "../../assets/projects/todolandingpage.jpg";

import Dashboard from "../../assets/projects/studentdashboard.jpg";
import mykartali from "../../assets/projects/landing.jpg";
import Video from "../../assets/projects/videorecorderlandingpage.jpg";
import netflix from "../../assets/projects/netflixlandingpageforportfolio.png";
import Delivery1 from "../../assets/projects/delivery1.jpg";
import Delivery2 from "../../assets/projects/3drenderingcomputerdesk.jpg";

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
      <h1 className="mern">
          <strong className="purple">Mern Stack</strong> Projects
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px",  flexGrow: "1"}}>
           
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mykartali}
              isBlog={false}
              title="MyKartAli"
              description="Experience a vibrant e-commerce platform offering men’s, women’s and lifestyle products, electronics, and much more. Browse beautiful product imagery, filter and sort by category or price, add items to your cart, and checkout seamlessly—all within a sleek, responsive design built with modern web tools. "
              ghLink="https://github.com/ALINAHAD/Ecommerce_Web.git"
              demoLink="https://ecommerce-web-psi-lac.vercel.app/"
              subtitle= "React.js, Redux, Node.js, HTML5, CSS3, and Bootstrap"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
           
                imgPath={netflix}
                imgStyle={{ height: "370px", width: "370px", objectFit: "cover" }}

              isBlog={false}
              title="Netflix Clone – Stream Your Way"
              description="A sleek responsive movie-and-series browsing interface built with modern web technologies. Browse trending titles, view details, and enjoy a smooth, styled experience inspired by leading streaming platforms."
              ghLink="https://github.com/ALINAHAD/Netflix_Clone_Website.git"
              demoLink="https://netflix-clone-website-git-main-alinahad-aks-projects.vercel.app/"
              subtitle= "Tools Used: HTML CSS JAVASCRIPT"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dashboard}
               imgStyle={{ height: "300px", width: "370px", objectFit: "cover" }}
              isBlog={false}
              title="EduBoard – Student Dashboard"
              description="A dynamic, modern dashboard for students that brings together courses, progress tracking, deadlines, and analytics in one place. The intuitive interface is built to help learners monitor their studies, review key metrics, and stay on top of tasks with ease."
              ghLink="https://github.com/ALINAHAD/Student_Dashboard.git"
              demoLink="https://student-dashboard-git-main-alinahad-aks-projects.vercel.app/"              
              subtitle= "Tools Used: HTML CSS JAVASCRIPT"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todo}
              isBlog={false}
              title="Takesprint ToDo App"
              description="A clean and intuitive task-management web application that helps you track, add, edit, and complete tasks quickly. Built for responsiveness and daily productivity, it features smooth interactions and modern UI design."
              ghLink="https://github.com/ALINAHAD/Todo-App.git"
              demoLink="https://takesprint-todoapp.vercel.app/"
              subtitle= "Tools Used: HTML CSS JAVASCRIPT"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Video}
              isBlog={false}
              title="Video Recorder & Zoom Tool"
              description="A lightweight web app that lets you record video via your browser and apply zoom or focus effects in real-time. Simple interface, no install required — capture and review your footage instantly."
              ghLink="https://github.com/ALINAHAD/Video_Recorder_ZOOM.git"
              demoLink="https://video-recorder-zoom.vercel.app/"
              subtitle= "Tools Used: React.js, JavaScript, MediaRecorder API, WebRTC, HTML5 Video, and CSS3."
            />
          </Col>

          
        </Row>
        <h1 className="mern">
          <strong className="purple">Data Analysis</strong> Projects
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
           
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Delivery1}
              isBlog={false}
              title="Product Case Study – Funnel & A/B Test"
              description="This project demonstrates end-to-end Product Management analysis using Funnel Metrics and A/B Testing. It includes data generation, funnel breakdown, experiment design, insights, and feature recommendations."
              ghLink="https://github.com/ALINAHAD/Delivery-Operations-Analysis.git"
              demoLink="https://product-managment-opal.vercel.app/"
              subtitle= "Tools Used:Python,Pandas, NumPy, Statsmodel, sMatplotlib"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
           
                imgPath={Delivery2}
                imgStyle={{ height: "370px", width: "370px", objectFit: "cover" }}

              isBlog={false}
              title="Netflix Clone – Stream Your Way"
              description="A complete end-to-end delivery operations analytics project analyzing shipment timelines, failure patterns, partner performance, and cost behavior using SQL, Python, and Power BI to uncover operational bottlenecks and optimization opportunities across the logistics lifecycle."
              ghLink="https://github.com/ALINAHAD/Delivery-Operations-Analysis.git"
              demoLink="https://sites.google.com/view/mykartalideliveryoperatin/home?authuser=0"
              subtitle= "Tools Used: SQL, Python, Power BI"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
