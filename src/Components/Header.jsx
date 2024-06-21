import React from "react";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HashLink } from 'react-router-hash-link';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary header">
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
                        <Row className="justify-content-center navRow">
                            <Col>
                                <HashLink to="/#boardofdirectors" className="navBarText">Board of Directors</HashLink>
                            </Col>
                        </Row>
                        <Row className="justify-content-center navRow">
                            <Col>
                                <HashLink to="/#contact" className="navBarText">Contact</HashLink>
                            </Col>
                        </Row>
                    </NavDropdown>

                    <NavDropdown title="Services" id="navbarScrollingDropdown">
                        <Row className="justify-content-center navRow">
                            <Col>
                                <HashLink to="/services/#theVision" className="navBarText">Vision</HashLink>
                            </Col>
                        </Row>
                        <Row className="justify-content-center navRow">
                            <Col>
                                <HashLink to="/services/#plug" className="navBarText">Plug</HashLink>
                            </Col>
                        </Row>
                        <Row className="justify-content-center navRow">
                            <Col>
                                <HashLink to="/services/#thePrograms" className="navBarText">Programs</HashLink>
                            </Col>
                        </Row>
                        <Row className="justify-content-center navRow">
                            <Col>
                                <HashLink to="/services/#enrollment" className="navBarText">Enrollment Eligibility</HashLink>
                            </Col>
                        </Row>
                    </NavDropdown>

                    <NavDropdown title="The Academy" id="navbarScrollingDropdown">
                        <Row className="justify-content-center navRow">
                            <Col>
                                <HashLink to="/academy/#curriculum" className="navBarText">Curriculum</HashLink>
                            </Col>
                        </Row>
                        <Row className="justify-content-center navRow">
                            <Col>
                                <HashLink to="/academy/#futureInnovations" className="navBarText">Future innovations</HashLink>
                            </Col>
                        </Row>
                    </NavDropdown>

                    <NavDropdown title="Ways to Help" id="navbarScrollingDropdown">
                        <Row className="justify-content-center navRow">
                            <Col>
                                <HashLink to="/waysToHelp/#howToHelp" className="navBarText">Individual Gifts and Endowments</HashLink>
                            </Col>
                        </Row>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;