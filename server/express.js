const axios = require("axios")
const express = require("express")
const rateLimit = require("axios-rate-limit")

const app = express()
const port = 3000

const coingecko = rateLimit(
  axios.create({
    baseURL: "https://api.coingecko.com/api/v3/coins",
    headers: {
      "Content-Type": "application/json"
    }
  }),
  { maxRequests: 3, perMilliseconds: 1000 }
)

app.get("/.netlify/functions/top100", async (req, res) => {
  const marketDataCoinAmount = 100

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
  try {
    const response = await coingecko.get(
      `/${req.query.id}/history?date=${req.query.history}`
    )
    const price = response.data
    res.send(JSON.stringify(price))
  } catch (error) {
    console.log(error.message)
    res.send()
  }
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
