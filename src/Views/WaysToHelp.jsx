import React from "react";
import { useState, useEffect } from "react";
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
    let [firstAmount, setFirstAmount] = useState(false);
    let [secondAmount, setSecondAmount] = useState(false);
    let [thirdAmount, setThirdAmount] = useState(false);
    let [fourthAmount, setFourthAmount] = useState(false);
    let [fifthAmount, setFifthAmount] = useState(false);
    let [otherAmount, setOtherAmount] = useState(false);
    let [customAmount, setCustomAmount] = useState("");
    let [showAmountMessage, setShowAmountMessage] = useState(false);
    let [disableButton, setDisableButton] = useState(false);
    let [tributeGift, setTributeGift] = useState(false);
    let [tributeGiftMessage, setTributeGiftMessage] = useState("");
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [address, setAddress] = useState("");
    let [state, setState] = useState("");
    let [city, setCity] = useState("");
    let [postalCode, setPostalCode] = useState("");
    let [country, setCountry] = useState("");
    let [selectedAmount, setSelectedAmount] = useState("")

    function determineNumberOfAmountsSelected() {
        const selections = [firstAmount, secondAmount, thirdAmount, fourthAmount, fifthAmount, otherAmount, customAmount];
        const currentSelections = selections.filter((item) => item === true);
        setShowAmountMessage(currentSelections.length > 1 ? true : false);
        setDisableButton(currentSelections.length > 1 ? true : false);
        if(currentSelections.length === 1){
            let selectedAmount = "";
            if(firstAmount){
                selectedAmount = 50
            } else if(secondAmount){
                selectedAmount = 100
            } else if(thirdAmount){
                selectedAmount = 250
            } else if(fourthAmount){
                selectedAmount = 500
            } else if(fifthAmount){
                selectedAmount = 1000
            } else if(customAmount){
                selectedAmount = customAmount
            }
            setSelectedAmount(selectedAmount)
        }
    }

    useEffect(() => {
        determineNumberOfAmountsSelected();
    })

    return (
        <>
        {console.log("square response: ", squareData) } 
            <Row className="paymentContainer theWaysToHelp" id="howToHelp">
                <Col md="12">
                    <h1>Donate Now</h1>
                    <p><i className="fas fa-lock"></i> Secured by Square</p>

                    <Form>
                        <h4>Amount ($):</h4>
                        <Form.Group className="mb-3" controlId="formAmount">
                            <Form.Check inline type="checkbox" label="50" onClick={() => setFirstAmount(!firstAmount)} />
                            <Form.Check inline type="checkbox" label="100" onClick={() => setSecondAmount(!secondAmount)} />
                            <Form.Check inline type="checkbox" label="250" onClick={() => setThirdAmount(!thirdAmount)} />
                            <Form.Check inline type="checkbox" label="500" onClick={() => setFourthAmount(!fourthAmount)} />
                            <Form.Check inline type="checkbox" label="1000" onClick={() => setFifthAmount(!fifthAmount)} />
                            <Form.Check inline type="checkbox" label="Other" onClick={() => setOtherAmount(!otherAmount)} />
                            <br />
                            {showAmountMessage ? (
                                <>
                                    <Form.Text className="textForAmounts">
                                        Select one amount or enter custom amount
                                    </Form.Text>
                                    <br />
                                </>
                            ) : (
                                ""
                            )}
                            {otherAmount ? (
                                <>
                                    <Form.Label>Custom:</Form.Label>
                                    <Form.Control inline type="other" placeholder="Custom Amount" onChange={(event) => setCustomAmount(event.target.value)} />
                                </>
                            ) : (
                                ""
                            )}
                        </Form.Group>

                        <h4>Tribute Gift:</h4>
                        <Form.Group className="mb-3" controlId="formMemory">
                                <Form.Check inline type="checkbox" label="Gift is in memory, support, or honor of someone" onClick={() => setTributeGift(!tributeGift)} />
                                {tributeGift ? (
                                    <Form.Control type="memory" placeholder="Message for Tribute Gift" onChange={(event) => setTributeGiftMessage(event.target.value)} />
                                ) : (
                                    ""
                                )}
                        </Form.Group>

                        <h4>Billing Info:</h4>
                        <Form.Group className="mb-3" controlId="formBillingInfo">
                            <Row>
                                <Col>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="firstName" placeholder="First Name" onChange={(event) => setFirstName(event.target.value)} />
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="address1" placeholder="Address" onChange={(event) => setAddress(event.target.value)} />
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="state" placeholder="State" onChange={(event) => setState(event.target.value)} />
                                </Col>
                                <Col>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="lastName" placeholder="Last Name" onChange={(event) => setLastName(event.target.value)} />
                                    <Form.Label>City/Town</Form.Label>
                                    <Form.Control type="cityTown" placeholder="City/Town" onChange={(event) => setCity(event.target.value)} />
                                    <Form.Label>Area Code</Form.Label>
                                    <Form.Control type="areaCode" placeholder="Area Code" onChange={(event) => setPostalCode(event.target.value)} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control type="country" placeholder="Country" onChange={(event) => setCountry(event.target.value)} />
                                </Col>
                            </Row>
                        </Form.Group>

                        {/* <Button variant="primary" type="submit">
                            Submit
                        </Button> */}
                    </Form>
                    <h4>Payment Info:</h4>
                    <PaymentForm 
                        applicationId="sandbox-sq0idb-M6GKByXppqVLCcyxjRLhTQ"
                        locationId='L67RFFDB8KKW2'
                        cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
                                console.log("selectedAmount!!!", selectedAmount)
                            const body = JSON.stringify({
                                sourceId: token.token,
                                locationId: "L67RFFDB8KKW2",
                                verificationToken: verifiedBuyer,
                                amount: {
                                    amount: selectedAmount,
                                    currency: 'USD'
                                },
                                billingInfo: {
                                    address_line_1: address,
                                    address_line_2: "",
                                    locality: city,
                                    state: state,
                                    postal_code: postalCode,
                                    country: country,
                                    first_name: firstName,
                                    last_name: lastName
                                },
                                note: tributeGiftMessage
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
                        // createPaymentRequest={() => ({
                        //     countryCode: "US",
                        //     currencyCode: "USD",
                        //     total: {
                        //         amount: "1.00",
                        //         label: "Total",
                        //     },
                        // })}
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
                                text: "Donate",
                                isLoading: disableButton,
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