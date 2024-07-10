const express = require('express');
const app = express();
const port = 4000;

const { Client, ApiError } = require("square");
const { randomUUID } = require('crypto');
const dotenv = require("dotenv");
dotenv.config();
var cors = require('cors');

app.use(cors());


const {paymentsApi} = new Client({
    bearerAuthCredentials: {
      accessToken: process.env.SQUARE_ACCESS_TOKEN
    },
    environment: 'sandbox',
  });
  
  async function handler(req, res) {
    try {
        const response = await paymentsApi.createPayment({
          locationId: req.locationId,
        //   sourceId: req.sourceId,
        // Need to change sourceId
          sourceId: "cnon:card-nonce-ok",
          idempotencyKey: randomUUID(),
          amountMoney: {
            amount: 100,
            currency: 'USD'
          },
          billingAddress: {},
          shippingAddress: {},
          customerDetails: {}
        });
      
        console.log("response", response.result.payment.status);
        console.log("response in back end", response.result);
        /* global BigInt */
        BigInt.prototype.toJSON = function() { return this.toString(); }
        res.send(response.body);
      } catch(error) {
        console.log("error", error);
        return error;
      }
  }

app.post('/donate', async (req, res) => {
    handler(req, res);
});
  
 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});