import React from "react";
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#mission">Kindness Developmental Center Inc.</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0 navBar"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <NavDropdown title="About Us" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#boardofdirectors"> 
                            Board of Directors 
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                    <NavDropdown title="Services" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#vision">Vision</NavDropdown.Item>
                        <NavDropdown.Item href="#plug">Plug</NavDropdown.Item>
                        {/* change the id for services once updated */}
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
                    <NavDropdown title="The Academy" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#academy">Broadcasting Training Program</NavDropdown.Item>
                        {/* change the id for services once updated */}
                        <NavDropdown.Item href="#futureinnovations"> 
                            Future innovations
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                    <NavDropdown title="Ways to Help" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#aboutus">Individual Gifts</NavDropdown.Item>
                        {/* change the id for services once updated */}
                        <NavDropdown.Item href="#aboutus"> 
                            Endowments
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;