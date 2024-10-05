import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useOutletContext } from "react-router-dom";
import ReactMarkdown from "react-markdown";

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
                {data.aboutPageCollection.items[0].theCenterAndQuoteImage ? (
                    <img src={data.aboutPageCollection.items[0].theCenterAndQuoteImage.url} width="75%" alt={data.aboutPageCollection.items[0].theCenterAndQuoteImage.description} className="cafe2"/>
                ) : ""}
            </Col>
        </Row>
    </Container>
    )
}

export default Center;