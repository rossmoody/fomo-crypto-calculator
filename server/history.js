const axios = require("axios")

const coingecko = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/coins",
  headers: {
    "Content-Type": "application/json"
  }
})

exports.handler = async function (event, context) {
  console.log("event", event)
  const response = await coingecko.get(
    `/${event.queryStringParamaters.id}/history?date=${event.queryStringParamaters.history}`
  )
  console.log("response", response)
  // const price = response.data.market_data?.current_price.usd

  // return {
  //   statusCode: 200,
  //   body: JSON.stringify(price)
  // }
}
