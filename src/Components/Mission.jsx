import React from "react";
import kdclogo from "../Assets/kdclogo.png";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Mission() {
    return (
    <Container className="mission" id="vission">
        {/* leaving in case they want headers */}
        {/* <Row>
            <Col id="mission">
                Our Vission
            </Col>
        </Row> */}
        <Row>
            <Col className="image" md="6">
                <img src={kdclogo} width="60%" alt="circle with kindness developmental center inc" className="mainLogo"/>
                {/* <span className="title">Kindness Developmental Center Inc.</span> */}
            </Col>
            <Col className="text" md="6">
                <Row>
                    <span className="visionSpan">To empower individuals with whom we engage, to improve physical, mental, social and economical health and wellness.</span>
                    <br />
                    <span className="visionSpan"> To create an organization that fosters a cultural platform exchange of growth and development. Job security with organization for individuals of all races and backgrounds. To eradicate stereo- typing, maintain healthy life skills.</span>
                    <br />
                    <span className="visionSpan">To provide independent/supervised housing to those who's health and wellness process require such assistance. Thrive in all environments and increase the knowledge exchange in our communities for lifelong healthy living through kindness. </span>
                </Row>
            </Col>

        </Row>
    </Container>
    )
}

export default Mission;