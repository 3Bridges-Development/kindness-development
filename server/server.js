const stripe = require('stripe')('sk_test_51PMKIWArzJ6mIZvFColAIGyszilFpPMYcjhVVo0nbrgUCzQRhteVaXd0bLB5Fha8n6xomCjk5kqbuzV2QSQ5fDNv00IFnBRcgY');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 4242;

app.use(express.static('public'));
const DOMAIN = 'http://localhost:3000';


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
});
console.log('outside route')

app.post('/waysToHelp', async (req, res) => {
  console.log('potato');
    console.log(req);
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      // line_items: [
      //   {
      //     // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
      //     price: '{{pr_1234}}',
      //     quantity: 1,
      //   },
      // ],
      mode: 'payment',
      return_url: `${DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
    });

    console.log(res, 'response');
    console.log(session)

    // res.send({ clientSecret: session.client_secret });
});

// app.get('/session-status', async (req, res) => {
//     const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

//     res.send({
//       status: session.status,
//       customer_email: session.customer_details.email
//     });
// });

app.listen(PORT, () => console.log(`Server now listening on port ${PORT}`));