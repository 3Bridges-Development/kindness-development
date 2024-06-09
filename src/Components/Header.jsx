import React from "react";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HashLink } from 'react-router-hash-link';

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="/">Kindness Developmental Center Inc.</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0 navBar"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <NavDropdown title="About Us" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/"> 
                            <HashLink to="/#boardofdirectors">Board of Directors</HashLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/"> 
                            <HashLink to="/#contact">Contact</HashLink>
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Services" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/services">
                            <HashLink to="/services/#theVision">Vision</HashLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/services">
                            <HashLink to="/services/#plug">Plug</HashLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/services">
                            <HashLink to="/services/#thePrograms">Programs</HashLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/services"> 
                            <HashLink to="/services/#enrollment">Enrollment Eligibility</HashLink>
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="The Academy" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/academy">
                            <HashLink to="/academy/#currentPrograms">Broadcasting Training Program</HashLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/academy">
                            <HashLink to="/academy/#futureInnovations">Future innovations</HashLink>
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Ways to Help" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/waysToHelp">
                            <HashLink to="/waysToHelp/#howToHelp">Individual Gifts and Endowments</HashLink>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;