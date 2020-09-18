const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HRwtCEOgiWdEhAOhi0AjD687IOslQU3ZweqnS2QocjVaYMUlmNgvw5X7AYacZvrIy1PATtQx6Q1GilyTAAtNTDt00GdhtcpIW')


//API

//App Config
const app = express()




//Middlewares
app.use(cors({ orgin: true }))
app.use(express.json())

// API Routes
app.get('/', (request, response) => response.status(200).send('Hello PRCV. This is API Call'))


app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Received !!>>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // This is subunits of the currency
        currency: "usd"
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})

// Listen command
exports.api = functions.https.onRequest(app)

//Example EndPoint
//http://localhost:5001/clone-ea9ab/us-central1/api