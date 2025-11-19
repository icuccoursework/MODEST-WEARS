// Simple Node.js Express webhook scaffold for payment provider callbacks
// Usage: npm init -y && npm install express body-parser
// Run: node server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

// Example endpoint to receive payment notifications
app.post('/webhook/payment', (req, res) => {
  console.log('Received webhook:', req.body);
  // TODO: validate provider signature here (Flutterwave / MTN MoMo)
  // Example: verify signature, check transaction status, update order in DB
  // Respond 200 OK to acknowledge
  res.status(200).send({received: true});
});

app.get('/', (req, res) => res.send('MODESTY WEARS Webhook ready'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('Webhook server running on port', PORT));