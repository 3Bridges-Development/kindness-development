import React from "react";
import { useState } from "react";
import newWave1 from "../Assets/newWave1.png";
import { PaymentForm, CreditCard, ApplePay, GooglePay } from "react-square-web-payments-sdk";
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

// const DOMAIN = window.location.host


function WaysToHelp() {
    let [squareData, setSquareData] = useState(null);
    // console.log("domain", DOMAIN)
    // const onClick = () => {
    //     console.log("button was clicked!")
    //   };

    return (
        <>
        {console.log("square response: ", squareData) } 
        {/* // probably need an useEffect */}
            {/* <section style={firstStyle}>
            </section> */}
            {/* <div className="paymentContainer theWaysToHelp" id="howToHelp" style={firstStyle}> */}
            <Row className="paymentContainer theWaysToHelp" id="howToHelp">
                <Col md="12 justify-content-center">
                    {/* the below is using the url */}
                    {/* <object type="text/html" data="https://checkout.square.site/merchant/MLQYBX1S3ZQY8/checkout/U4QVTIB4QKTJKNQTIBYNDH3C" width="800px" height="800px">

                    </object> */}
                    <h1>Donation</h1>
                    <PaymentForm 
                        applicationId="sandbox-sq0idb-M6GKByXppqVLCcyxjRLhTQ"
                        cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
                            console.log('token:', token);
                            console.log('verifiedBuyer:', verifiedBuyer);

                            const body = JSON.stringify({
                                sourceId: token.token,
                                locationId: "L67RFFDB8KKW2",
                                verificationToken: verifiedBuyer,
                                billingContact: {
                                          addressLines: ['123 Main Street', 'Apartment 1'],
                                          familyName: 'Doe',
                                          givenName: 'John',
                                          countryCode: 'US',
                                          city: 'Portsmouth',
                                        },
                            })

                            const response = await fetch(`/donate`, {
                                method: "POST",
                                headers: {
                                "Content-type": "application/json",
                                },
                                body,
                            })

                            if (response.ok) {
                                setSquareData(await response.json());
                            } else {
                                console.log("there was an error with the payment")
                            }
                        }}
                        locationId='L67RFFDB8KKW2'
                        createPaymentRequest={() => ({
                            countryCode: "US",
                            currencyCode: "USD",
                            total: {
                              amount: "1.00",
                              label: "Total",
                            },
                          })}
                        // createVerificationDetails={() => ({
                        //     amount: '1.00',
                        //     /* collected from the buyer */
                        //     billingContact: {
                        //       addressLines: ['123 Main Street', 'Apartment 1'],
                        //       familyName: 'Doe',
                        //       givenName: 'John',
                        //       countryCode: 'US',
                        //       city: 'Portsmouth',
                        //     },
                        //     currencyCode: 'USD',
                        //     intent: 'CHARGE',
                        //   })}
                    >
                        {/* <ApplePay />
                        <GooglePay /> */}
                        <CreditCard 
                            buttonProps={{
                                css: {
                                backgroundColor: "#9A2222",
                                color: "#fff",
                                "&:hover": {
                                    backgroundColor: "#530f16",
                                },
                                },
                                isLoading: false,
                                // onClick: onClick,
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