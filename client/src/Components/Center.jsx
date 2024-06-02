import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cafe2 from "../Assets/cafe2.jpeg";
import { useOutletContext } from "react-router-dom";
import ReactMarkdown from "react-markdown"

function Center() {
  const data = useOutletContext();

    return (
    <Container className="center" id="thecenter">
        <Row className="centerRow">
            <Col className="text" md="6">
                {data.aboutPageCollection.items[0].theCenterQuoteAndText ? (
                    <Row>
                        <ReactMarkdown>
                            {data.aboutPageCollection.items[0].theCenterQuoteAndText}
                        </ReactMarkdown>
                    </Row>

                ) : ""}
            </Col>
            <Col className="image" md="6">
                <img src={cafe2} width="75%" alt="people sitting at a table at a cafe" className="cafe2"/>
            </Col>
        </Row>
    </Container>
    )
}

export default Center;