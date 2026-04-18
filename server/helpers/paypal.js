const paypal = require("paypal-rest-sdk");

require('dotenv').config({path:"./.env" });
// console.log("env check",process.env);
// console.log("Paypal_mode",process.env.PAYPAL_MODE);
// console.log("PAYPAL MODE:", process.env.PAYPAL_MODE);
paypal.configure({
  mode: process.env.PAYPAL_MODE,
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET
});
module.exports = paypal;
