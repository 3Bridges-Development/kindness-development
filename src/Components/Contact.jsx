import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import Container from 'react-bootstrap/Container';

function Contact() {
    return (
    <Container id="contact">
        <Row className="justify-content-center" width="40%">
            <Col className="text" md="3">
                <a href="https://tommynobiscenter.org/donate-now/" rel="noopener noreferrer" target="_blank">
                    <i class="fa fa-instagram" style={{fontSize: "48px"}}></i>
                </a>
            </Col>
            <Col className="text" md="3">
                <a href="https://tommynobiscenter.org/donate-now/" rel="noopener noreferrer" target="_blank">
                    <i class="fa fa-facebook" style={{fontSize: "48px"}}></i>
                </a>
            </Col>
            {/* <Col className="text" md="3">
                <a href="https://tommynobiscenter.org/donate-now/" rel="noopener noreferrer" target="_blank">
                    <i class="fa fa-tiktok" style={{fontSize: "48px"}}></i>
                </a>
            </Col> */}
            <Col className="text" md="3">
                <a href="https://tommynobiscenter.org/donate-now/" rel="noopener noreferrer" target="_blank">
                    <i class="fa fa-linkedin" style={{fontSize: "48px"}}></i>
                </a>
            </Col>
            {/* leave room for YouTube icon in the future */}
            {/* <Col className="text" md="3">
                <a href="https://tommynobiscenter.org/donate-now/" rel="noopener noreferrer" target="_blank">
                    <i class="fa fa-tiktok" style={{fontSize: "48px"}}></i>
                </a>
            </Col> */}
        </Row>
    </Container>
    )
}

export default Contact;