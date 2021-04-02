const axios = require("axios")
const axiosRetry = require("axios-retry")

exports.handler = async function (event, context) {
  const coingecko = axios.create({
    baseURL: "https://api.coingecko.com/api/v3/coins",
    headers: {
      "Content-Type": "application/json"
    }
  })

  const id = event.queryStringParameters.id
  const history = event.queryStringParameters.history

  axiosRetry(coingecko, {
    retryDelay: retryCount => {
      return retryCount * 1000
    }
  })

  try {
    const { data } = await coingecko.get(`/${id}/history?date=${history}`)
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (error) {
    return {
      statusCode: 502,
      body: JSON.stringify({})
    }
  }
}
