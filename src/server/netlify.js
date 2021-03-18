const fetch = require("node-fetch")

exports.handler = async function (event, context) {
  const response = await fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.COIN_MARKET_KEY
      }
    }
  )
  const body = await response.text()

  return {
    statusCode: 200,
    body: JSON.stringify(body)
  }
}
