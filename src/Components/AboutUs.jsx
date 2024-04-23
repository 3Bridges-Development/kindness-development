import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Gallery from "./Gallery";
import brochure from "../Assets/thePlugBrochure.pdf";
import plugIcon from "../Assets/plug.png";

function AboutUs() {
    return (
    <Container className="aboutus" id="aboutus">
        {/* <Row>
            <Col id="aboutus">
                About Us
            </Col>
        </Row> */}
        <Row className="justify-content-center programs">
             <Col className="text" md="6">
                <Row width="40%">
                    <p className="kindness">Programs</p>
                    <div>
                        <p className="programHeader">Job Readiness Program</p>
                        <p>Will teach individuals using Soft Skills.Soft Skills are everyday interpersonal skills that job seekers need to succeed on the job. They include: Communicating clearly and appropriately, remembering work directions, working well with others and knowing how to solve problems. Hands on training; Individuals are directly involved in their learning. Individuals get direct hands on experience. Hands on learning is good for both mental and physical skills, for implementing task. These skills will help Youth/Young adults succeed in life no matter what situation occurs.</p>
                        <p className="programHeader">Life Skills Program</p>
                        <p>Develop positive social skills and etiquettes. Become self confident. Self awareness. Self management. Communication and Collaboration. Stress management.</p>
                        <p className="programHeader">Sensory Space</p>
                        <p>Universal space to cater to Children, youth and young adults. will provide calming equipment used for relaxation, meditation and Stimuli.</p>
                        <p className="programHeader">Music Therapy Program</p>
                        <p>Therapeutic music is a method for relaxing and lifting emotions in times of need. Also teaches individuals how to use music to improve their well-being. Helps with Anxiety, Anxiousness and Depression. Develop clearer thinking and positive emotions.</p>
                        <p className="programHeader">Broadcasting Training Program</p>
                        <p>Will provide the individual with hands on learning in all aspects of broadcasting. While developing social, mental and physical skills.</p>
                        <p className="programHeader">Counseling Online and In Person</p>
                        <p>Will help with everyday life issues. Safe space for crisis.</p>
                        <p className="programHeader">Food Pantry</p>
                        <p>Giving back to the community. Spreading Kindness. Hands learning individuals will Create, arrange and receive donations. Structure Food Pantry</p>
                    </div>
                </Row>
            </Col>
        </Row>
        <Row className="justify-content-center plug">
             <Col className="textPlug" md="6">
                <Row width="40%">
                    <p className="kindness">PLUG</p>
                    <a href={brochure} target="_blank" > 
                        <p>Parents Live Ultimate Guide</p>
                    </a>
                    <a href={brochure} target="_blank" > 
                        <img width="40%" src={plugIcon} alt="plug" />
                    </a>

                    {/* <div>
                        <p className="programHeader">Job Readiness Program</p>
                        <p>Will teach individuals using Soft Skills.Soft Skills are everyday interpersonal skills that job seekers need to succeed on the job. They include: Communicating clearly and appropriately, remembering work directions, working well with others and knowing how to solve problems. Hands on training; Individuals are directly involved in their learning. Individuals get direct hands on experience. Hands on learning is good for both mental and physical skills, for implementing task. These skills will help Youth/Young adults succeed in life no matter what situation occurs.</p>
                        <p className="programHeader">Life Skills Program</p>
                        <p>Develop positive social skills and etiquettes. Become self confident. Self awareness. Self management. Communication and Collaboration. Stress management.</p>
                    </div> */}
                </Row>
            </Col>
        </Row>
        {/* <Row className="justify-content-center">
            <Col className="text" md="8">
                <Row width="40%">
                    <span className="kindness">Kindness</span>
                </Row>
            </Col>
        </Row> */}
        {/* <Row className="justify-content-center">
            <Col md="6">
                <Gallery />
            </Col>
        </Row> */}
    </Container>
    )
}

export default AboutUs;