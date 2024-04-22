import React from "react";
import backgroundImage from "../Assets/backgroundImage.jpg";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MainBlurb() {
    return (
    <Container className="MainBlurb">
        <Row className="sm-12">
            <Col className="image">
                <img src={backgroundImage} width="40%" alt="circle with kindness developmental center inc" className="mainLogo"/>
            </Col>

        </Row>
    </Container>
    )
}

export default MainBlurb;