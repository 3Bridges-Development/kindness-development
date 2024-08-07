import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import brochure from "../Assets/Brochure.pdf";
import plugIcon from "../Assets/plug.png";
import { useOutletContext } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function Programs() {
    const data = useOutletContext();

    return (
        <section className="allServices">
            <Row className="justify-content-center programs" id="plug">
                <Col className="text" md="8">
                    <Row className="justify-content-center">
                        <Col className="textPlug" md="6">
                            <Row width="40%">
                                <p className="kindness">PLUG</p>
                                <a href={brochure} target="_blank" rel="noopener noreferrer" className="plugLink"> 
                                    <p className="plugText">Parents Life's Ultimate Guide</p>
                                </a>
                                <a href={brochure} target="_blank" rel="noopener noreferrer" > 
                                    <img width="100%" src={plugIcon} alt="plug" />
                                </a>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="justify-content-center programs" id="thePrograms">
                <Col className="firstProgramText" md="8">
                    {data.programsOnServicesPageCollection.items ? (
                        data.programsOnServicesPageCollection.items.map(program => (
                            <ReactMarkdown key={program.programsAndEnrollment} className="programInfoSection">
                                {program.programsAndEnrollment}
                            </ReactMarkdown>
                        ))
                    ) : ""}
                </Col>
            </Row>
            <Row className="justify-content-center programs" id="enrollment">
                <Col className="text" md="8">
                    <Row className="justify-content-center">
                        <Col className="textEnrollment" md="10">
                            {data.servicesPageCollection.items[0].enrollmentEligibility ? (
                                data.servicesPageCollection.items.map(program => (
                                    <ReactMarkdown key={program.enrollmentEligibility} className="enrollmentEligibility">
                                        {program.enrollmentEligibility}
                                    </ReactMarkdown>
                                ))
                            ) : ""}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    )
}

export default Programs;