import React from "react";
import newWave1 from "../Assets/newWave1.png";
import { Row, Col } from "react-bootstrap";
import { useOutletContext } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const bottomStyle = {
    backgroundImage:
        `url('${newWave1}')`,
    height: "50vh",
    backgroundPosition: "center bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

function WaysToHelp() {
    const data = useOutletContext();

    return (
        <>
            <Row className="theWaysToHelp" id="howToHelp">
                <Col md="12 justify-content-center">
                    <h1>Donate Now</h1>
                </Col>
            </Row>
            <Row className="theWaysToHelp">
                <Col md="12 justify-content-center">
                <stripe-buy-button
                    buy-button-id="buy_btn_1Q6Z7bCiNVy4UcACn51EpLBV"
                    publishable-key="pk_live_51Pxd8tCiNVy4UcACFksxujTUUlgZGGcfHoZjzvJmSUeRgYCtGfLbLCMVK9owHYRwo14JFFJRFYuFKHDLBawZYRZj00nlxh2Zp2"
                >
                </stripe-buy-button>
                </Col>
            </Row>
            {data.donationPageCollection.items.length !== 0 ? (
                <Row className="donationText justify-content-center" id="donationInfo">
                    <Col md="8">
                        <ReactMarkdown>
                            {data.donationPageCollection.items[0].donationPageInfo}
                        </ReactMarkdown>
                    </Col>
                </Row>
            ) : ("")}
            <section style={bottomStyle}>
            </section>
        </>
    )
}

export default WaysToHelp;