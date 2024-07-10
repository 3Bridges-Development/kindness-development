import React from "react";
import newWave1 from "../Assets/newWave1.png";
import { PaymentForm, CreditCard } from "react-square-web-payments-sdk";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import wave5 from "../Assets/wave5.png";

// TODO: add top image when content is ready
// const firstStyle = {
//     backgroundImage:
//         // `url('${newWave1Rotated}')`,
//         `url('${wave5}')`,
//         // `url('${newWaveYellow}')`,
//     minHeight: "50vh",
//     backgroundPosition: "center top",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
// };

const secondStyle = {
    backgroundImage:
        `url('${newWave1}')`,
    height: "50vh",
    backgroundPosition: "center bottom",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};

// const DOMAIN = window.location.href

function WaysToHelp() {

    return (
        <>
            {/* <section style={firstStyle}>
            </section> */}
            {/* <div className="paymentContainer theWaysToHelp" id="howToHelp" style={firstStyle}> */}
            <Row className="paymentContainer theWaysToHelp" id="howToHelp">
                <Col md="12 justify-content-center">
                    {/* the below is using the url */}
                    {/* <object type="text/html" data="https://checkout.square.site/merchant/MLQYBX1S3ZQY8/checkout/U4QVTIB4QKTJKNQTIBYNDH3C" width="800px" height="800px">

                    </object> */}
                    <PaymentForm 
                        applicationId="sandbox-sq0idb-M6GKByXppqVLCcyxjRLhTQ"
                        cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
                            console.log('token:', token);
                            console.log('verifiedBuyer:', verifiedBuyer);

                            const body = JSON.stringify({
                                sourceId: token.token,
                                locationId: "L67RFFDB8KKW2"
                            })

                            const response = await fetch("http://localhost:4000/donate", {
                            // const response = await fetch("https://connect.squareupsandbox.com/v2/payments", {
                            // const response = await fetch(`${DOMAIN}/donate`, {
                            // const response = await fetch(`/donate`, {
                                method: "POST",
                                headers: {
                                "Content-type": "application/json",
                                },
                                body,
                                // mode: "no-cors",
                            })

                            console.log("response in front end", response)
                            if (response.ok) {
                                console.log(response.json());
                                return response.json();
                            } else {
                                console.log("there was an error with the payment")
                            }
                        }}
                        locationId='L67RFFDB8KKW2'
                    >
                        <CreditCard 
                            buttonProps={{
                                css: {
                                backgroundColor: "#9A2222",
                                color: "#fff",
                                "&:hover": {
                                    backgroundColor: "#530f16",
                                },
                                },
                            }}
                        />
                    </PaymentForm>
                </Col>
            </Row>
            <section style={secondStyle}>
            </section>
        </>
    )
}

export default WaysToHelp;