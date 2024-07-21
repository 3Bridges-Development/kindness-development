import React from "react";
import { useState } from "react";
import newWave1 from "../Assets/newWave1.png";
import { PaymentForm, CreditCard, ApplePay, GooglePay } from "react-square-web-payments-sdk";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
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


function WaysToHelp() {
    let [squareData, setSquareData] = useState(null);

    return (
        <>
        {console.log("square response: ", squareData) } 
            <Row className="paymentContainer theWaysToHelp" id="howToHelp">
                <Col md="12">
                    <h1>Donate Now</h1>

                    <Form>
                        <h2>Amount:</h2>
                        <Form.Group className="mb-3" controlId="formAmount">
                            <Form.Check type="checkbox" label="50" onClick={() => console.log("hereee")} />
                            <Form.Check type="checkbox" label="100" />
                            <Form.Check type="checkbox" label="250" />
                            <Form.Check type="checkbox" label="500" />
                            <Form.Check type="checkbox" label="1000" />
                            <Form.Label>Other:</Form.Label>
                                <Form.Control type="other" placeholder="Custom Amount" />
                        </Form.Group>

                        <h2>Tribute Gift:</h2>
                        <Form.Group className="mb-3" controlId="formMemory">
                                <Form.Label>In memory, support, or honor of someone (optional)</Form.Label>
                                <Form.Control type="memory" placeholder="Message" />
                        </Form.Group>

                        <h2>Billing Info:</h2>
                        <Form.Group className="mb-3" controlId="formBillingInfo">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="firstName" placeholder="First Name" />
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="lastName" placeholder="Last Name" />
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="address1" placeholder="Address" />
                            <Form.Label>City/Town</Form.Label>
                            <Form.Control type="cityTown" placeholder="City/Town" />
                            <Form.Label>State</Form.Label>
                            <Form.Control type="state" placeholder="State" />
                            <Form.Label>Area Code</Form.Label>
                            <Form.Control type="areaCode" placeholder="Area Code" />
                            <Form.Label>Country</Form.Label>
                            <Form.Control type="country" placeholder="Country" />

                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>

                        {/* <Button variant="primary" type="submit">
                            Submit
                        </Button> */}
                    </Form>
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