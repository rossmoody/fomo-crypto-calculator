const axios = require("axios")

const coingecko = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/coins",
  headers: {
    "Content-Type": "application/json"
  }
})

exports.handler = async function (event, context) {
  const response = await coingecko.get(
    "/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
  )

  return {
    statusCode: 200,
    body: JSON.stringify(response.data)
  }
}
