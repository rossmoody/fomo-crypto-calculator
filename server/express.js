const axios = require('axios')
const express = require('express')
const database = require('./firebase-database')

const app = express()
const port = 3000

const coingecko = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3/coins',
  headers: {
    'Content-Type': 'application/json'
  }
})

app.get('/.netlify/functions/market-data', async (req, res) => {
  const marketDataCoinAmount = 30

  try {
    const response = await coingecko.get(
      `/markets?vs_currency=usd&order=market_cap_desc&per_page=${marketDataCoinAmount}&page=1&sparkline=false`
    )
    res.send(JSON.stringify(response.data))
  } catch (error) {
    console.log(error)
  }
})

app.get('/.netlify/functions/price-history', async (req, res) => {
  let price = null

  const [year, month, day] = req.query.history.split('-')
  const reformattedDate = `${day}-${month}-${year}`

  try {
    const snapshot = database
      .ref('coins')
      .child(req.query.id)
      .child(reformattedDate)

    price = (await snapshot.once('value')).val()
    console.log(price)
  } catch (error) {
    console.log(
      'Error reaching database for: ',
      req.query.id,
      reformattedDate,
      error
    )
  }

  res.send(JSON.stringify(price))
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
