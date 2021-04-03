const axios = require("axios")
const rateLimit = require("axios-rate-limit")

exports.handler = async function (event, context) {
  const coingecko = rateLimit(
    axios.create({
      baseURL: "https://api.coingecko.com/api/v3/coins",
      headers: {
        "Content-Type": "application/json"
      }
    }),
    { maxRequests: 10, perMilliseconds: 1000, maxRPS: 10 }
  )

  const id = event.queryStringParameters.id
  const history = event.queryStringParameters.history

  try {
    const { data } = await coingecko.get(`/${id}/history?date=${history}`)
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (error) {
    return {
      statusCode: 200,
      body: JSON.stringify({})
    }
  }
}
