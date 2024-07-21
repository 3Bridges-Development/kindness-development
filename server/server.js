const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 4000;

const { Client, ApiError } = require("square");
const { randomUUID } = require('crypto');
const dotenv = require("dotenv");
dotenv.config();
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());


const {paymentsApi} = new Client({
    bearerAuthCredentials: {
      accessToken: process.env.SQUARE_ACCESS_TOKEN
    },
    environment: 'sandbox',
  });
  
  async function handler(req, res) {
    try {
      console.log("req: ", req.body)

        const response = await paymentsApi.createPayment({
          locationId: req.body.locationId,
          sourceId: req.body.sourceId,
          idempotencyKey: randomUUID(),
          amountMoney: {
            amount: req.body.amount.amount,
            currency: req.body.amount.currency
          },
          billingAddress: {
            address_line_1: req.body.billingInfo.address_line_1,
            // address_line_2: req.body.billingInfo.address_line_2,
            locality: req.body.billingInfo.locality,
            administrative_district_level_1: req.body.billingInfo.state,
            postal_code: req.body.billingInfo.postal_code,
            country: req.body.billingInfo.country,
            first_name: req.body.billingInfo.first_name,
            last_name: req.body.billingInfo.last_name
          },
          note: req.body.note,
          // customerDetails: {}
        });

        console.log(response.result)
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