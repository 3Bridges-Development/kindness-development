import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cafe2 from "../Assets/cafe2.jpeg";
import React from "react";
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact() {
    return (
    <Container id="contact">
    {/* <Container className="Contact" id="contact"> */}
        {/* <Row>
            <Col>
                Contact
            </Col>
        </Row> */}
        <Row className="justify-content-center" width="40%">
            <Col className="text" md="6">
                <Row>
                    <p>Instagram icon</p>
                    <p>Facebook icon</p>
                    <p>Tiktok icon</p>
                    <p>Linkedin icon</p>
                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                </Row>
            </Col>
        </Row>
    </Container>
    )
}

export default Contact;