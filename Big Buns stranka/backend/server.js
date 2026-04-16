import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
import admin from "firebase-admin";

dotenv.config();

const app = express();
app.use(express.json());

const stripe = new Stripe(process.env.STRIPE_SECRET);

// Firebase
admin.initializeApp({
  credential: admin.credential.applicationDefault()
});
const db = admin.firestore();

/* CREATE ORDER + PAYMENT */
app.post("/create-payment", async (req, res) => {

  const { items } = req.body;

  const total = items.reduce((sum,i)=>sum+i.price,0);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total * 100,
    currency: "czk",
    automatic_payment_methods: { enabled: true }
  });

  const order = await db.collection("orders").add({
    items,
    status: "new",
    created: Date.now()
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
    orderId: order.id
  });
});

/* UPDATE STATUS */
app.post("/update-status", async (req,res)=>{
  const {id,status} = req.body;

  await db.collection("orders").doc(id).update({status});
  res.send({ok:true});
});

app.listen(3000, ()=>console.log("🔥 server běží"));