import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import plugIcon from "../Assets/plug.png";
import { useOutletContext } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function AcademyInfo() {
    const data = useOutletContext();
    let i=0;

    return (
        <section className="academyInfo">
            <Row className="justify-content-center" id="academy" style={{paddingTop: "200px"}}>
                <Col className="firstProgramText" md="10">
                    <Row className="justify-content-center" style={{paddingBottom: "50px", paddingTop: "50px"}}>
                        <Col md="6" className="futureText" id="futureinnovations">
                        {data.academyFutureInnovationsCollection.items ? (
                            data.academyFutureInnovationsCollection.items.map(futureProgram => (
                                <ReactMarkdown key={futureProgram.futureInnovations}>
                                    {futureProgram.futureInnovations}
                                </ReactMarkdown>
                            ))
                        ) : ""}
                        </Col>
                        <Col md="3" className="imageCol">
                            <img width="100%" src={plugIcon} alt="plug" className="futureInnovationsImage" />
                            <p>Future Innovations</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    )
}

export default AcademyInfo;