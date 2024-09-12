import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useOutletContext } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import building1 from "../Assets/building1.jpg";
import Gallery from "./Gallery";
import kdclogo from "../Assets/kdclogo.png";

function AcademyInfo() {
    const data = useOutletContext();

    return (
        <section className="academyInfo">
            <Row className="justify-content-center" id="academy">
                <Row className="justify-content-center imageData">
                    <Col md="6" className="imageCol">
                        <div className="imageDiv align-middle">
                            <img width="100%" src={kdclogo} alt="Circular Kindness Developmental Center Inc. logo" className="mainLogo" />
                        </div>
                    </Col>
                </Row>
                <Row className="futureText justify-content-center" id="referredData">
                    <Col md="8">
                        {data.howIsAPersonReferredCollection.items? (
                            data.howIsAPersonReferredCollection.items.map(item => (
                                <ReactMarkdown key={item.referredInfo[0]}>
                                    {item.referredInfo}
                                </ReactMarkdown>
                            ))
                        ) : ("")}
                    </Col>
                 </Row>
                <Row className="futureText justify-content-center" id="curriculum">
                    <Col md="8">
                        {data.academyProgramsCollection.items ? (
                            data.academyProgramsCollection.items.map(academyProgram => (
                                <ReactMarkdown key={academyProgram.academyPrograms} className="academyPrograms">
                                    {academyProgram.academyPrograms}
                                </ReactMarkdown>
                            ))
                        ) : ""}
                    </Col>
                </Row>
                <Row className="justify-content-center futureText" id="futureInnovations">
                    <Col className="firstProgramText" md="10">
                        <Row className="justify-content-center" style={{paddingBottom: "150px", paddingTop: "100px"}}>
                            <Col md="9" className="futureText">
                                {data.academyFutureInnovationsCollection.items ? (
                                    data.academyFutureInnovationsCollection.items.map(futureProgram => (
                                        <ReactMarkdown key={futureProgram.futureInnovations}>
                                            {futureProgram.futureInnovations}
                                        </ReactMarkdown>
                                    ))
                                ) : ""}
                            </Col>
                            <Col md="3" className="imageCol">
                                    <img width="100%" src={building1} alt="Buildings being built in a city" className="futureInnovationsImage" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="galleryRow justify-content-center" style={{paddingBottom: "100px"}}>
                    <Col md="6">
                        <Gallery />
                    </Col>
                </Row>
            </Row>
        </section>
    )
}

export default AcademyInfo;