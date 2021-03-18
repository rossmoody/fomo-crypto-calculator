// const fetch = require("node-fetch")
const express = require("express")
const app = express()
const port = 3000

app.get("/.netlify/functions/netlify", async (req, res) => {
  // const response = await fetch(
  //   "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
  //   {
  //     headers: {
  //       "X-CMC_PRO_API_KEY": process.env.COIN_MARKET_KEY
  //     }
  //   }
  // )
  // const body = await response.text()
  console.log(req)
  res.send(JSON.stringify("Hello world"))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
