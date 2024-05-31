import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MainBlurb() {
    return (
        <Container className="MainBlurb" id="MainBlurb">
            <Row className="justify-content-end">
                <Col className="mainMission" md="6">
                    <p className="mainParagraph">Kindness Developmental Center Inc.  Will serve and create a safe space for youth/Young adults (14-21) and Adults (22 and up) With Intellectual Developmental Disabilities.  We will provide a soft skill learning environment that will nurture each individual's needs.  We are committed to developing long term relationships.  Bridging the gap to create more interconnected partnerships in the community.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default MainBlurb;