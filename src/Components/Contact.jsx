import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import Container from 'react-bootstrap/Container';
import { useOutletContext } from "react-router-dom";

function Contact() {
  const data = useOutletContext();
  const contactData = data.aboutPageCollection.items[0].socialMediaLinks;

    return (
    <Container id="contact">
        <Row className="justify-content-center contactRow" width="40%">
            {contactData ? (
                contactData.map(link => (
                    link.includes("instagram") ? (
                        <Col className="text" md="3" key={link}>
                            <Row>
                                <a href={link} rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram" style={{fontSize: "48px"}}></i>
                                </a>
                            </Row>
                            <Row className="text">
                                <a href={link} rel="noopener noreferrer" target="_blank">
                                    <span>Instagram</span>
                                </a>
                            </Row>
                        </Col>
                    ) : link.includes("facebook") ? (
                        <Col className="text" md="3" key={link}>
                            <Row>
                                <a href={link} rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook" style={{fontSize: "48px"}}></i>
                                </a>
                            </Row>
                            <Row className="text">
                                <a href={link} rel="noopener noreferrer" target="_blank">
                                    <span>Facebook</span>
                                </a>
                            </Row>
                        </Col>
                    ) : link.includes("linkedin") ? (
                        <Col className="text" md="3" key={link}>
                            <Row>
                                <a href={link} rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin" style={{fontSize: "48px"}}></i>
                                </a>
                            </Row>
                            <Row className="text">
                                <a href={link} rel="noopener noreferrer" target="_blank">
                                    <span>Linkedin</span>
                                </a>
                            </Row>
                        </Col>
                    ) : link.includes("tiktok") ? (
                    <Col className="text" md="3" key={link}>
                        <Row>
                            <a href={link} rel="noopener noreferrer" target="_blank">
                                <i className="fa-brands fa-tiktok" style={{fontSize: "48px"}}></i>
                            </a>
                        </Row>
                        <Row className="text">
                                <a href={link} rel="noopener noreferrer" target="_blank">
                                    <span>TikTok</span>
                                </a>
                        </Row>
                    </Col>
                    ) : ""
                ))
            ) : ""}
            {/* may add YouTube icon in the future */}
        </Row>
    </Container>
    )
}

export default Contact;