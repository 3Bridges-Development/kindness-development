import React from "react";
import backgroundImage from "../Assets/backgroundImage.jpg";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MainBlurb() {
    return (
    <Container className="MainBlurb">
        <Row className="sm-12" style={{
            // backgroundImage: `url(${process.env.PUBLIC_URL + './Assets/backgroundImage.jpg'})`,
            // backgroundImage: `url("${backgroundImage})`,
            // backgroundRepeat: 'no-repeat',
            // width:'250px' 
    }}>
            <Col className="image">
            {/* Kindness Development Center Inc. */}
                <img src={backgroundImage} width="40%" alt="circle with kindness development center inc" className="mainLogo"/>
                {/* <span className="title">Kindness Development Center Inc.</span> */}
            </Col>
            {/* <Col className="text" md="6">
                <Row>
                    <span>To Create a Safe Space, for youth, young adults, and adults with Disabilities. To ensure they have an opportunity to reach their highest levels of skill, purpose, dignity, and respect. Through commitment, advocacy, family, community, and partnerships. </span>
                </Row>
            </Col> */}

        </Row>
    </Container>
    )
}

export default MainBlurb;