import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import Container from 'react-bootstrap/Container';
import { useOutletContext } from "react-router-dom";

function Contact() {
    const data = useOutletContext();
    const contactData = data.aboutPageCollection.items[0].socialMediaLinks;
    const phoneNumber = data.aboutPageCollection.items[0].phoneNumber;

    return (
        <Container id="contact">
            <Row className="justify-content-center contactRow" width="40%">
                {contactData ? (
                    contactData.map(link => (
                        link.includes("instagram") ? (
                            <Col className="text" md="3" key={link}>
                                <Row>
                                    <a href={link} rel="noopener noreferrer" target="_blank" role='button' aria-label='press this button to be taken to Instagram'>
                                        <i className="fa fa-instagram" style={{ fontSize: "48px" }}></i>
                                        Instagram
                                    </a>
                                </Row>
                            </Col>
                        ) : link.includes("facebook") ? (
                            <Col className="text" md="3" key={link}>
                                <Row>
                                    <a href={link} rel="noopener noreferrer" target="_blank" role='button' aria-label='press this button to be taken to Facebook'>
                                        <i className="fa fa-facebook" style={{ fontSize: "48px" }}></i>
                                        Facebook
                                    </a>
                                </Row>
                            </Col>
                        ) : link.includes("linkedin") ? (
                            <Col className="text" md="3" key={link}>
                                <Row>
                                    <a href={link} rel="noopener noreferrer" target="_blank" role='button' aria-label='press this button to be taken to LinkedIn'>
                                        <i className="fa fa-linkedin" style={{ fontSize: "48px" }}></i>
                                        Linkedin
                                    </a>
                                </Row>
                            </Col>
                        ) : link.includes("tiktok") ? (
                            <Col className="text" md="3" key={link}>
                                <Row>
                                    <a href={link} rel="noopener noreferrer" target="_blank" role='button' aria-label='press this button to be taken to Tiktok'>
                                        <i className="fa-brands fa-tiktok" style={{ fontSize: "48px" }}></i>
                                        TikTok
                                    </a>
                                </Row>
                            </Col>
                        ) : ""
                    ))
                ) : ""}
                {phoneNumber ? (
                    <Col className="text" md="3" key={phoneNumber}>
                        <Row>
                            <a href={`tel:+${phoneNumber}`} rel="noopener noreferrer" role='button' aria-label='press this button to be call Kindness Developmental Center'>
                                <i className="fa-solid fa-phone" style={{ fontSize: "48px" }}></i>
                                Phone Number
                            </a>
                        </Row>
                    </Col>
                ) : ("")}
                {/* may add YouTube icon in the future */}
            </Row>
        </Container>
    )
}

export default Contact;