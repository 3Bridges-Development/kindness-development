import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Gallery from "./Gallery";
import plugIcon from "../Assets/plug.png";

function AboutUs() {
    return (
    <Container className="aboutus" id="aboutus">
        <Row className="justify-content-center" id="boardofdirectors">
            <Col className="firstboardofdirectors" md="10">
                <Row>
                    <Col md="3" className="imageCol">
                        <img width="100%" src={plugIcon} alt="plug" className="bioImage" />
                        <p>Juanita Goodwin</p>
                    </Col>
                    <Col md="9">
                        <p>I’m a retired Lab Tech of 20yrs. A mother of 7, 1 who is special needs,  7 grandchildren, 3 are on the Autism spectrum  My family and  I relocated to Georgia in 2014.</p>
                        <br />
                        <p>I’m a retired Lab Tech of 20yrs. A mother of 7, 1 who is special needs,  7 grandchildren, 3 are on the Autism spectrum  My family and  I relocated to Georgia in 2014.</p>
                        <br />
                        <p>I’m a retired Lab Tech of 20yrs. A mother of 7, 1 who is special needs,  7 grandchildren, 3 are on the Autism spectrum  My family and  I relocated to Georgia in 2014.</p>
                    </Col>
                </Row>
            </Col>
            <Col className="secondboardofdirectors" md="10">
                <Row>
                    <Col md="9">
                        <p>Delores A. Wallace has been a passionate advocate for parents, students, and teachers for over
30 years. Her journey began in East Orange, New Jersey, where she worked as a Teacher&#39;s
Assistant in Special Education. Over the years, she held various roles in education, including the
first Community Outreach Coordinator for the East Orange School District.</p>
                        <br />
                        <p>Ms. Wallace holds a bachelor&#39;s degree in psychology from the University of Phoenix and an
MBA from Strayer University. Her educational background, combined with her extensive
experience in the field, has equipped her with the knowledge and skills to effectively support
families and enhance parental involvement in education.</p>
                        <br />
                        <p>Throughout her career, Ms. Wallace has demonstrated a remarkable ability to bring people
together. She has worked tirelessly to bridge the gap between parents, teachers, and the
community, believing that collaboration is key to student success. Her efforts have resulted in
the establishment of strong parent-teacher associations and partnerships with local businesses
and organizations.</p>
<br />
<p>One of Ms. Wallace&#39;s notable achievements was the creation of a community event that
celebrated children while providing valuable resources and support. The event, which included a
fashion show aimed at boosting students&#39; self-esteem, became a beloved tradition in the East
Orange community.</p>
<br />
<p>In addition to her work within the school district, Ms. Wallace has been actively involved in
county-level organizations such as the Essex County Youth Services Commission and the
Workforce Development Council. She has served as a liaison between these organizations and
the parents in her district, ensuring that families have access to important resources and
information.</p>
<br />
<p>Ms. Wallace's philosophy centers around the belief that every parent is a gift, and every child is
a blessing. Her dedication to empowering parents and supporting students reflects her
commitment to building a brighter future for all.</p>
                    </Col>
                    <Col md="3" className="imageCol">
                        <img width="100%" src={plugIcon} alt="plug" className="bioImage" />
                        <p>Delores Wallace</p>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row className="justify-content-center">
            <Col md="6">
                <Gallery />
            </Col>
        </Row>
    </Container>
    )
}

export default AboutUs;