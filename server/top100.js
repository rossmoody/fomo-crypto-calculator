const axios = require("axios")

const coingecko = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/coins",
  headers: {
    "Content-Type": "application/json"
  }
})

exports.handler = async function (event, context) {
  const url =
    "/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
  const response = await coingecko.get(url)

  return {
    statusCode: 200,
    body: JSON.stringify(response.data)
  }
}
