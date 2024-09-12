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
                    <Row className="justify-content-center">
                        <Col className="textPlug" md="6">
                            <Row width="40%">
                                <p className="kindness">PLUG - Book for Purchase</p>
                                <a href="https://www.amazon.com/PLUG-Parents-Ultimate-Children-Insanity-ebook/dp/B0DC5NDZRC/ref=sr_1_1?crid=6HTB2T6Q9KGN&dib=eyJ2IjoiMSJ9.9loPw1X9_TT-eyptG3eKUw.qEifSnHBzTiYSmc08-Ddm5nL3k76XwG59v751OmVEn0&dib_tag=se&keywords=Plug-Parents+Life%27s+Ultimate+Gifts&qid=1723296090&rnid=2941120011&s=books&sprefix=plug-parents+life%27s+ultimate+gifts%2Caps%2C171&sr=1-1" target="_blank" rel="noopener noreferrer" className="plugLink"> 
                                    <p className="plugText">PLUG - Parents Life's Ultimate Gift: Steps to Raising Healthy Children In A World of Insanity</p>
                                </a>
                                <p className="plugText">by Delores Wallace</p>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="justify-content-center programs" id="thePrograms">
                <Col className="firstProgramText" md="8">
                    {data.visionOnServicesPageCollection.items[0] ? (
                        data.visionOnServicesPageCollection.items.map(vision => (
                            <ReactMarkdown key={vision.vission} className="programInfoSection">
                                {vision.vission}
                            </ReactMarkdown>
                        ))
                    ) : ""}
                </Col>
            </Row>
            <Row className="justify-content-center programs" id="theProgramsDetails">
                <Col className="firstProgramText" md="8">
                    {data.programsOnServicesPageCollection.items[0] ? (
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