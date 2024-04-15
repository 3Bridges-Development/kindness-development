import React from "react";
// import kdclogo from "../Assets/kdclogo.png";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
    return (
    <Container className="header">
        <Row className="justify-content-md-start">
            <Col className="mainHeader" md="6">
            {/* Kindness Development Center Inc. */}
                {/* <img src={kdclogo} width="10%" alt="circle with kindness development center inc" className="mainLogo"/> */}
                <span className="title">Kindness Development Center Inc.</span>
            </Col>
            <Col className="subHeader" md="6">
                <Row className="justify-content-md-end">
                    <Col className="subHeaderLabel" md="4">
                        <a href="#mission">Our Mission</a>
                    </Col>
                    <Col className="subHeaderLabel" md="4">
                        <a href="#thecenter">The Center</a>
                    </Col>
                    <Col className="subHeaderLabel" md="3">
                    <a href="#aboutus">About Us</a>
                    </Col>
                </Row>
            </Col>

        </Row>
    </Container>
    )
}

export default Header;