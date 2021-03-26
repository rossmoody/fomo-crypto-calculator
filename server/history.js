const axios = require("axios")

const coingecko = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/coins",
  headers: {
    "Content-Type": "application/json"
  }
})

exports.handler = async function (event, context) {
  const response = await coingecko.get(
    `/${event.queryStringParamaters.id}/history?date=${event.queryStringParamaters.history}`
  )
  const price = response.data

  return {
    statusCode: 200,
    body: JSON.stringify(price)
  }
}
