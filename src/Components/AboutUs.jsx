import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UseContentful from "../Hooks/use-contentful";
import ReactMarkdown from "react-markdown";
import DeloresW from "../Assets/DeloresW.png";
import JuanitaG from "../Assets/JuanitaG.png";
import CenterInfo from "../Components/CenterInfo";

const query = `
query {
  aboutPageCollection{
    items{
      aboutMission,
      theCenterQuoteAndText,
      boardOfDirectorsText,
      secondBoardOfDirectorsText,
      thirdBoardOfDirectorsImage{
        title,
        description,
        url,
        width,
        height
      },
      thirdBoardOfDirectorsText,
      fourthBoardOfDirectorsImage{
        title,
        description,
        url,
        width,
        height
      },
      fourthBoardOfDirectorsText,
      backgroundImageOnHomePage{
        title,
        description,
        url,
        width,
        height
      },
      theCenterAndQuoteImage{
        title,
        description,
        url,
        width,
        height
      }
    }
  }
}
`

function AboutUs() {
let { data, errors } = UseContentful(query);
if (errors)
    return (
      <span style={{ color: "red" }}>
        {errors.map((error) => error.message).join(",")}
      </span>
    );
  if (!data) return <span></span>;


    return (
    <Container className="aboutus" id="aboutus">
        <Row className="justify-content-center" id="boardofdirectors">
            <CenterInfo />
            <Col className="firstboardofdirectors" md="10">
                <Row>
                    <Col md="3" className="imageCol">
                        <div className="imageDiv align-middle">
                            <img width="100%" src={JuanitaG} alt="Profile of Juanita Goodwin" className="bioImage" />
                            <p>Juanita Goodwin</p>
                        </div>
                    </Col>
                    {data.aboutPageCollection.items[0].boardOfDirectorsText ? (
                        <Col md="9">
                            <ReactMarkdown>
                                {data.aboutPageCollection.items[0].boardOfDirectorsText}
                            </ReactMarkdown>
                        </Col>
                    ) : ""}
                </Row>
            </Col>
            <Col className="secondboardofdirectors" md="10">
                <Row>
                    <Col md="3" className="imageCol">
                        <div className="imageDiv align-middle">
                            <img width="100%" src={DeloresW} alt="Profile of Delores Wallace" className="bioImage" />
                            <p>Delores Wallace</p>
                        </div>
                    </Col>
                        {data.aboutPageCollection.items[0].secondBoardOfDirectorsText ? (
                            <Col md="9">
                                <ReactMarkdown>
                                    {data.aboutPageCollection.items[0].secondBoardOfDirectorsText} 
                                </ReactMarkdown>
                            </Col>
                        ) : ""}
                </Row>
            </Col>
            {data.aboutPageCollection.items[0].thirdBoardOfDirectorsImage ? (
                <Col className="thirdboardofdirectors" md="10">
                <Row>
                    <Col md="3" className="imageCol">
                        <div className="imageDiv align-middle">
                            <img width="100%" src={data.aboutPageCollection.items[0].thirdBoardOfDirectorsImage.url} alt={data.aboutPageCollection.items[0].thirdBoardOfDirectorsImage.description} className="bioImage" />
                            <p>Brianna Turner</p>
                        </div>
                    </Col>
                        {data.aboutPageCollection.items[0].thirdBoardOfDirectorsText ? (
                            <Col md="9">
                                <ReactMarkdown>
                                    {data.aboutPageCollection.items[0].thirdBoardOfDirectorsText} 
                                </ReactMarkdown>
                            </Col>
                        ) : ""}
                </Row>
            </Col>
            ) : ""}
            {data.aboutPageCollection.items[0].fourthBoardOfDirectorsImage ? (
                <Col className="fourthboardofdirectors" md="10">
                <Row>
                    <Col md="3" className="imageCol">
                        <div className="imageDiv align-middle">
                            <img width="100%" src={data.aboutPageCollection.items[0].fourthBoardOfDirectorsImage.url} alt={data.aboutPageCollection.items[0].fourthBoardOfDirectorsImage.description} className="bioImage" />
                        </div>
                    </Col>
                        {data.aboutPageCollection.items[0].fourthBoardOfDirectorsText ? (
                            <Col md="9">
                                <ReactMarkdown>
                                    {data.aboutPageCollection.items[0].fourthBoardOfDirectorsText} 
                                </ReactMarkdown>
                            </Col>
                        ) : ""}
                </Row>
            </Col>
            ) : ""}
        </Row>
    </Container>
    )
}

export default AboutUs;