import React from "react";
import kdclogo from "../Assets/kdclogo.png";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Mission() {
    return (
    <Container className="mission">
        <Row>
            <Col id="mission">
                Mission
            </Col>
        </Row>
        <Row>
            <Col className="image" md="6">
                <img src={kdclogo} width="25%" alt="circle with kindness developmental center inc" className="mainLogo"/>
                {/* <span className="title">Kindness Developmental Center Inc.</span> */}
            </Col>
            <Col className="text" md="6">
                <Row>
                    <span>To Create a Safe Space, for youth, young adults, and adults with Disabilities. To ensure they have an opportunity to reach their highest levels of skill, purpose, dignity, and respect. Through commitment, advocacy, family, community, and partnerships. </span>
                </Row>
            </Col>

        </Row>
    </Container>
    )
}

export default Mission;