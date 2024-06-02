import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Gallery from "./Gallery";
import { useOutletContext } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import DeloresW from "../Assets/DeloresW.png";
import JuanitaG from "../Assets/JuanitaG.png";

function AboutUs() {
    const data = useOutletContext();

    return (
    <Container className="aboutus" id="aboutus">
        <Row className="justify-content-center" id="boardofdirectors">
            <Col className="firstboardofdirectors" md="10">
                <Row>
                    <Col md="3" className="imageCol">
                        <div className="imageDiv align-middle">
                            <img width="100%" src={JuanitaG} alt="Profile of Juanita Goodwin" className="bioImage" />
                            <p>Juanita Goodwin</p>
                        </div>
                    </Col>
                    {data.aboutPageCollection.items[0].boardOfDirectorsText ? (
                        <Col md="9">
                            <ReactMarkdown>
                                {data.aboutPageCollection.items[0].boardOfDirectorsText}
                            </ReactMarkdown>
                        </Col>
                    ) : ""}
                </Row>
            </Col>
            <Col className="secondboardofdirectors" md="10">
                <Row>
                    <Col md="3" className="imageCol">
                        <div className="imageDiv align-middle">
                            <img width="100%" src={DeloresW} alt="Profile of Delores Wallace" className="bioImage" />
                            <p>Delores Wallace</p>
                        </div>
                    </Col>
                        {data.aboutPageCollection.items[0].secondBoardOfDirectorsText ? (
                            <Col md="9">
                                <ReactMarkdown>
                                    {data.aboutPageCollection.items[0].secondBoardOfDirectorsText} 
                                </ReactMarkdown>
                            </Col>
                        ) : ""}
                </Row>
            </Col>
        </Row>
        <Row className="galleryRow justify-content-center">
            <Col md="10">
                <Gallery />
            </Col>
        </Row>
    </Container>
    )
}

export default AboutUs;