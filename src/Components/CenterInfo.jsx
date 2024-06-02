import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import kdclogo from "../Assets/kdclogo.png";
import { useOutletContext } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function Center() {
  const data = useOutletContext();

    return (
        <Col className="aboutProgram" md="10">
            <Row>
                {data.aboutPageCollection.items[0].aboutUsGeneralInfo ? (
                    <Col md="9">
                        <ReactMarkdown>
                            {data.aboutPageCollection.items[0].aboutUsGeneralInfo}
                        </ReactMarkdown>
                    </Col>
                ) : ""}
                <Col md="3" className="imageCol">
                    <div className="imageDiv align-middle">
                        <img width="100%" src={kdclogo} alt="Circular Kindness Developmental Center Inc. logo" className="generalAboutImage" />
                        <p>Empower Your Potential</p>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}

export default Center;