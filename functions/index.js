// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const config = require("./product.json");
// const express = require("express");
const cors = require("cors")({ origin: true });
// const app = express();

// // Automatically allow cross-origin requests
// app.use(cors({ origin: true }));

// app.get("/", (req, res) => res.json(config));

exports.products = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    res.status(200).send(config);
  });
});
