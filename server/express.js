const axios = require("axios")
const express = require("express")
const database = require("./firebase-database")

const app = express()
const port = 3000

const coingecko = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/coins",
  headers: {
    "Content-Type": "application/json"
  }
})

app.get("/.netlify/functions/top100", async (req, res) => {
  const marketDataCoinAmount = 20

  try {
    const response = await coingecko.get(
      `/markets?vs_currency=usd&order=market_cap_desc&per_page=${marketDataCoinAmount}&page=1&sparkline=false`
    )
    res.send(JSON.stringify(response.data))
  } catch (error) {
    console.log(error)
  }
})

app.get("/.netlify/functions/history", async (req, res) => {
  let price = 0

  try {
    const coinRef = database.ref("coins").child(req.query.id)
    const snapshot = (await coinRef.once("value")).val()

    for (const obj of snapshot) {
      if (obj.date === req.query.history) {
        console.log(
          "*** Has a date match -->",
          req.query.id,
          req.query.history,
          obj.price
        )
        price = obj.price
      }
    }
  } catch (error) {
    console.log("Request failed -->", req.query.id)
  }
  res.send(JSON.stringify(price))
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
