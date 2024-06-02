import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useOutletContext } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function MainBlurb() {
    const data = useOutletContext();

    return (
        <Container className="MainBlurb" id="MainBlurb">
            <Row className="justify-content-end">
                {data.aboutPageCollection.items[0].aboutMission ? (
                    <Col className="mainMission" md="6">
                        <ReactMarkdown className="mainParagraph">
                            {data.aboutPageCollection.items[0].aboutMission}
                        </ReactMarkdown>
                    </Col>
                    ) : ""
                }
            </Row>
        </Container>
    )
}

export default MainBlurb;