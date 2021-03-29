const axios = require("axios")

const coingecko = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/coins",
  headers: {
    "Content-Type": "application/json"
  }
})

exports.handler = async function (event, context) {
  const id = event.queryStringParameters.id
  const history = event.queryStringParameters.history
  const { data } = await coingecko.get(`/${id}/history?date=${history}`)

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}
