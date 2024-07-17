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
            <Row className="paymentContainer theWaysToHelp" id="howToHelp">
                <Col md="12 justify-content-center">
                    <h1>Donate Now</h1>
                    <p><i class="fas fa-lock"></i> Secured by Square</p>
                    <form>
                        <label for="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName"></input>
                        <label for="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName"></input>
                        {/* add amount, address, and optional note, then send it to backend */}
                    </form>

                    <PaymentForm 
                        applicationId="sandbox-sq0idb-M6GKByXppqVLCcyxjRLhTQ"
                        locationId='L67RFFDB8KKW2'
                        cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
                            
                            const body = JSON.stringify({
                                sourceId: token.token,
                                locationId: "L67RFFDB8KKW2",
                                verificationToken: verifiedBuyer,
                                amount: {
                                    amount: 50,
                                    currency: 'USD'
                                },
                                billingInfo: {
                                    address_line_1: "25 Mystic Ave",
                                    address_line_2: "",
                                    locality: "Boston",
                                    state: "MA",
                                    postal_code: "03908",
                                    country: "US",
                                    first_name: "Ryan",
                                    last_name: "Reynolds"
                                },
                                note: "Donation in memory"
                            });
                            
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
                        createPaymentRequest={() => ({
                            countryCode: "US",
                            currencyCode: "USD",
                            total: {
                              amount: "1.00",
                              label: "Total",
                            },
                          })}
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
                                // isLoading: false,
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