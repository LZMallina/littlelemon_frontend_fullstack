/// load environment variables from the .env file into process.env
require('dotenv').config()

//setup express
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({
  origin: 'http://localhost:3000'
}))
app.use(express.json());
//app.use(express.static('public')); //this is needed if server and client are running in one port

//setup stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const storeItems = new Map([
  [1, { priceInCents: 100, name: "Order Total" }],
  [2, { priceInCents: 100, name: "Order Total" }],
  
]);
// Create a post request for /create-checkout-session
app.post("/create-checkout-session", async (req, res) => {
  try {
    // Create a checkout session with Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      // For each item use the id to get it's information
      // Take that information and convert it to Stripe's format
      line_items: req.body.items.map(({ id, quantity }) => {
        const storeItem = storeItems.get(id)
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: quantity,
        }
      }),
      mode: "payment",
      // Set a success and cancel URL we will send customers to
      // These must be full URLs
      // In the next section we will setup CLIENT_URL
      success_url: `${process.env.CLIENT_URL}/about`,
      cancel_url: `${process.env.CLIENT_URL}/menu`,
    })

    res.json({ url: session.url })
  } catch (e) {
    // If there is an error send it to the client
    res.status(500).json({ error: e.message })
  }
})

app.listen(4000, () => console.log("Node server listening on port 4000!"));