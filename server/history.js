const axios = require("axios")

const coingecko = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/coins",
  headers: {
    "Content-Type": "application/json"
  }
})

exports.handler = async function (event, context) {
  const id = event.queryStringParamaters.id
  const history = event.queryStringParamaters.id
  const response = await coingecko.get(`/${id}/history?date=${history}`)

  const price = response.data

  return {
    statusCode: 200,
    body: JSON.stringify(price)
  }
}
