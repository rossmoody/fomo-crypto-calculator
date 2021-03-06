const axios = require('axios')

exports.handler = async function () {
  const marketDataCoinAmount = 150
  const url = `/markets?vs_currency=usd&order=market_cap_desc&per_page=${marketDataCoinAmount}&page=1&sparkline=false`

  const coingecko = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/coins',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  try {
    const { data } = await coingecko.get(url)
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch {
    return {
      statusCode: 200,
      body: JSON.stringify([]),
    }
  }
}
