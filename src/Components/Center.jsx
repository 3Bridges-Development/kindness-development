import React from "react";
import kdclogo from "../Assets/kdclogo.png";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cafe2 from "../Assets/cafe2.jpeg";

function Center() {
    return (
    <Container className="center" id="thecenter">
        {/* <Row>
            <Col id="thecenter">
                The Center
            </Col>
        </Row> */}
        <Row>
            <Col className="text" md="6">
                <Row>
                    {/* <span>To Create a Safe Space, for youth, young adults, and adults with Disabilities. To ensure they have an opportunity to reach their highest levels of skill, purpose, dignity, and respect. Through commitment, advocacy, family, community, and partnerships. </span> */}
                    <p>"Whe we feel love and kindness toward others, it not only makes others feel loved and cared for. But it helps us also to develop inner happiness and peace."</p>
                    <p>-The 14th Dalai Lama</p>
                </Row>
            </Col>
            <Col className="image" md="6">
                <img src={cafe2} width="75%" alt="people sitting at a table at a cafe" className="cafe2"/>
            </Col>
        </Row>
    </Container>
    )
}

export default Center;