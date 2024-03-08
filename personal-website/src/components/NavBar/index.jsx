import React from 'react'
import { Container, Navbar, Nav, NavDropdown, Button, Fade } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Index = () => {
    const [activeLink, setActiveLink] = useState("about");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <>
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={''} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#about" onClick={() => onUpdateActiveLink("about")} className={activeLink === "about" ? "active nav-bar-link" : "nav-bar-link"}>About Me</Nav.Link>
                            <Nav.Link href="#skills" onClick={() => onUpdateActiveLink("skills")} className={activeLink === "skills" ? "active nav-bar-link" : "nav-bar-link"}>Skills</Nav.Link>
                            <Nav.Link href="#projects" onClick={() => onUpdateActiveLink("project")} className={activeLink === "projects" ? "active nav-bar-link" : "nav-bar-link"}>projects</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                            <Nav.Link href=""> </Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <Link to="#">
                                    <img src={''} alt="" />
                                    <img src={''} alt="" />
                                    <img src={''} alt="" />
                                </Link>
                            </div>
                        </span>
                        <button className="vvd" onClick={() => console.log = 'connect'}>
                            <p>Let's Connect</p>
                        </button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default Index