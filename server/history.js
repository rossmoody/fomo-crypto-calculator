const axios = require("axios")

const coingecko = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/coins",
  headers: {
    "Content-Type": "application/json"
  }
})

exports.handler = async function (event, context) {
  const response = await coingecko.get(
    `/${event.query.id}/history?date=${event.query.history}`
  )
  const price = response.data.market_data?.current_price.usd

  return {
    statusCode: 200,
    body: JSON.stringify(price)
  }
}