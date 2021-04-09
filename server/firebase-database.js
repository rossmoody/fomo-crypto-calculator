const firebase = require("firebase-admin")

firebase.initializeApp({
  credential: firebase.credential.cert({
    projectId: "fomo-crypto-calculator",
    privateKey: process.env.FOMO_PRIVATE_KEY.replace(/\\n/g, "\n"),
    clientEmail: process.env.FOMO_CLIENT_EMAIL
  }),
  databaseURL: "https://fomo-crypto-calculator-default-rtdb.firebaseio.com"
})

let database = firebase.database()

module.exports = database
