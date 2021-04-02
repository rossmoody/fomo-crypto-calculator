const axios = require("axios")
const axiosRetry = require("axios-retry")

exports.handler = async function (event, context) {
  const coingecko = axios.create({
    baseURL: "https://api.coingecko.com/api/v3/coins",
    headers: {
      "Content-Type": "application/json"
    }
  })

  axiosRetry(coingecko, {
    retryDelay: retryCount => {
      return retryCount * 2000
    }
  })

  const url =
    "/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"

  try {
    const { data } = await coingecko.get(url)

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (error) {
    return {
      statusCode: 200,
      body: JSON.stringify([])
    }
  }
}
