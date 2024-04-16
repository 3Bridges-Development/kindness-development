import React from "react";
import kdclogo from "../Assets/kdclogo.png";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Center() {
    return (
    <Container className="center">
        <Row>
            <Col id="thecenter">
                The Center
            </Col>
        </Row>
        <Row>
            <Col className="text" md="6">
                <Row>
                    <span>To Create a Safe Space, for youth, young adults, and adults with Disabilities. To ensure they have an opportunity to reach their highest levels of skill, purpose, dignity, and respect. Through commitment, advocacy, family, community, and partnerships. </span>
                </Row>
            </Col>
            <Col className="image" md="6">
                <img src={kdclogo} width="25%" alt="circle with kindness development center inc" className="mainLogo"/>
                {/* <span className="title">Kindness Development Center Inc.</span> */}
            </Col>
        </Row>
    </Container>
    )
}

export default Center;