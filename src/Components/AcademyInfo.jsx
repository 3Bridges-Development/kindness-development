import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import brochure from "../Assets/thePlugBrochure.pdf";
import plugIcon from "../Assets/plug.png";

function AcademyInfo() {

    return (
        <section className="academyInfo">
            <Row className="justify-content-center" id="academy" style={{paddingTop: "200px"}}>
                <Col className="firstProgramText" md="10">
                    <Row className="justify-content-center">
                        <Col>
                            <p className="programHeader">Broadcasting Training Program</p>
                            <p className="programInfo">Will provide the individual with hands on learning in all aspects of broadcasting. While developing social, mental and physical skills.</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center" style={{paddingBottom: "50px", paddingTop: "50px"}}>
                        <Col md="6" className="futureText" id="futureinnovations">
                            <p className="programHeader">Future Innovations</p>
                            <p className="programInfo">Music Therapy Studio</p>
                            <p className="programInfo">Food Pantry</p>
                            <p className="programInfo">Counseling</p>
                        </Col>
                        <Col md="3" className="imageCol">
                            <img width="100%" src={plugIcon} alt="plug" className="bioImage" />
                            <p>image of thinking character or icon</p>
                        </Col>
                    </Row>
                    <Row className="justify-content-center" style={{paddingBottom: "50px", paddingTop: "50px"}}>
                        <Col md="6" className="futureText" id="enrollment">
                            <p className="programHeader">Enrollment Eligibility</p>
                            <p className="programInfo">Text here</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    )
}

export default AcademyInfo;