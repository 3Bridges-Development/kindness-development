import React from "react";
import newWave1 from "../Assets/newWave1.png";
import { Row, Col } from "react-bootstrap";
// import wave5 from "../Assets/wave5.png";

// TODO: add top image when content is ready
// const firstStyle = {
//     backgroundImage:
//         // `url('${newWave1Rotated}')`,
//         `url('${wave5}')`,
//         // `url('${newWaveYellow}')`,
//     minHeight: "100vh",
//     backgroundPosition: "center top",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
// };

const secondStyle = {
    backgroundImage:
        `url('${newWave1}')`,
    height: "100vh",
    backgroundPosition: "center bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

function WaysToHelp() {

    return (
        <>
            <Row className="theWaysToHelp" id="howToHelp">
                <Col md="12 justify-content-center">
                    <h1>Donate Now</h1>
                </Col>
            </Row>
            <Row className="theWaysToHelp">
                <Col md="12 justify-content-center">
                    <script async
                    src="https://js.stripe.com/v3/buy-button.js">
                    </script>

                    <stripe-buy-button
                    buy-button-id="buy_btn_1Pjpm2Roha3LTV1IHrYUvfuu"
                    publishable-key="pk_test_51Pc6U3Roha3LTV1I0tFLbBcKvDLtk3eHrpCVbXzjaEAup7XHKCUoUpC17LUFF9STnOb5tF4WEO2K5PHSTzH5rJmw00KQSwpUhm"
                    >
                    </stripe-buy-button>
                </Col>
            </Row>
            <section style={secondStyle}>
            </section>
        </>
    )
}

export default WaysToHelp;