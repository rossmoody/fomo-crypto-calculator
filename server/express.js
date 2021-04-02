const axios = require("axios")
const express = require("express")
const app = express()
const port = 3000

const coingecko = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/coins",
  headers: {
    "Content-Type": "application/json"
  }
})

app.get("/.netlify/functions/top100", async (req, res) => {
  try {
    const response = await coingecko.get(
      "/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
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
  console.log(`Llistening at http://localhost:${port}`)
})
