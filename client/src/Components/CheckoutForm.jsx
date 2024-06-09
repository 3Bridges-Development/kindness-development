import React, { useCallback } from 'react';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51PMKIWArzJ6mIZvF19sCIo1YP8XvixvsipuyAVtafZbcQ5YBdqm9KSG8rrbAxuRWmYGbKt2LzonND28qQBJuRmTa005JLTZqol');
const DOMAIN = 'http://localhost:3000';


const CheckoutForm = () => {
    const fetchClientSecret = useCallback(() => {
        // Create a Checkout Session
        return fetch(`${DOMAIN}/waysToHelp`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`
            },
        })
            // .then((res) => console.log(res))
            .then((res) => res.json())
            .then((data) => data.clientSecret)
            .catch(err => console.log(err))
    }, []);

    const options = { fetchClientSecret };

    return (
        <div id="checkout">
            <EmbeddedCheckoutProvider
                stripe={stripePromise}
                options={options}
            >
                <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
        </div>
    )
}

export default CheckoutForm;