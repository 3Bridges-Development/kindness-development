import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import brochure from "../Assets/thePlugBrochure.pdf";
import plugIcon from "../Assets/plug.png";

function Programs() {

    return (
        <section className="allServices">
            <Row className="justify-content-center programs" id="plug">
                <Col className="text" md="8">
                    <Row className="justify-content-center plug">
                        <Col className="textPlug" md="6">
                            <Row width="40%">
                                <p className="kindness">PLUG</p>
                                <a href={brochure} target="_blank" rel="noopener noreferrer" > 
                                    <p>Parents Live Ultimate Guide</p>
                                </a>
                                <a href={brochure} target="_blank" rel="noopener noreferrer" > 
                                    <img width="100%" src={plugIcon} alt="plug" />
                                </a>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="justify-content-center programs">
                <Col className="firstProgramText" md="10">
                    <p className="programHeader" id="yees">YEES</p>
                    <p className="programInfo">(Youth Early Employment Services) Is an incentive designed program for youths (14-21) that combines lessons and hands on training in school setting. KDCI partners with local schools to provide a tailored curriculum from experienced trained vocational counselors. Job Readiness, life Skills and Communication.  YEES is a core part of our services and is provided over several weeks and will provide pre-vocational training and education.  
                    KDCI will service schools in Paulding County and schools across the metro Atlanta areas.</p>
                    <p className="programHeader" id="summerservices" style={{paddingTop: "50px"}}>Summer Services</p>
                    <p className="programInfo">Summer/School Break program will be offered onsite and off site.  Our program includes: Career Exploration,Field trips,Skill set demonstration,Guest Speakers and hands on real work opportunities. Activity based learning activities strengthens job readiness skills in a practical way,All summer and school Break Sessions  follow (GROW) Getting Ready For Opportunities To Work. Model: Incudes a focus on Self Advocacy, Work Readiness training, job Exploration, Work Based Learning, and counseling on Post-Secondary Opportunities. 
                    </p>
                    <p className="programHeader" id="enrollment" style={{paddingTop: "50px"}}>Enrollment Eligibility</p>
                    <p className="programInfo">Text here</p>
                </Col>
            </Row>
        </section>
    )
}

export default Programs;