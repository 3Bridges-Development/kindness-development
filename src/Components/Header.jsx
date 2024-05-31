import React from "react";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

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
                        <NavDropdown.Item href="/#boardofdirectors"> 
                            Board of Directors 
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/#contact"> 
                            Contact
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>

                    <Link to="services" relative="path">
                    <NavDropdown title="Services" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/services#vision">Vision</NavDropdown.Item>
                        <NavDropdown.Item href="/services/#plug">Plug</NavDropdown.Item>
                        <NavDropdown.Item href="#yees"> 
                            YEES 
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#summerservices"> 
                            Summer Services
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#enrollment"> 
                            Enrollment Eligibility
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>

                    </Link>

                    <NavDropdown title="The Academy" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/academy">Broadcasting Training Program</NavDropdown.Item>
                        <NavDropdown.Item href="/academy"> 
                            Future innovations
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                    <NavDropdown title="Ways to Help" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="/waysToHelp">Individual Gifts</NavDropdown.Item>
                        <NavDropdown.Item href="/waysToHelp"> 
                            Endowments
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;