import React from "react";
import kdclogo from "../Assets/kdclogo.png";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useOutletContext } from "react-router-dom";

function Mission() {
  const data = useOutletContext();

    return (
        <Container className="vision" id="vision">
            <Row className="visionRow">
                <Col className="image" md="4">
                    <img src={kdclogo} width="60%" alt="circle with kindness developmental center inc" className="mainLogo"/>
                </Col>
                <Col className="text" md="8">
                    {data.servicesPageCollection.items[0].vision ? (
                        data.servicesPageCollection.items[0].vision
                    ): ""}
                </Col>
            </Row>
        </Container>
    )
}

export default Mission;