import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import MyBrandLogo from "/MyBrandLogo.png";


import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar, AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

import Button from "react-bootstrap/Button";
import Particle from "./Particle";
import pdf from "../assets/alinahadresume2025fullstackdeveloper.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll direction logic (Hide down → Show up)
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={`navbar ${isVisible ? "nav-show" : "nav-hide"}`}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={MyBrandLogo} className="logo" alt="brand" />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto active">

            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
              <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
            </Nav.Link>

            <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
              <AiOutlineUser style={{ marginBottom: "2px" }} /> About
            </Nav.Link>

            <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
              <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
            </Nav.Link>

          

            <Nav.Link as={Link} to="/others" onClick={() => updateExpanded(false)}>
              <CgFileDocument style={{ marginBottom: "2px" }} /> Others
            </Nav.Link>

           
                      <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        className="resume-button"
                      >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                      </Button>
               
                  

            <button
              href="https://github.com/ALINAHAD/PortfolioAlinahadAK.git"
              target="_blank"
              className="forkbutton"
            >
              <CgGitFork style={{ fontSize: "1.2em" }} /> <AiFillStar style={{ fontSize: "1.1em" }} />
            </button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;