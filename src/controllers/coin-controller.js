const axios = require("axios")

const coingecko = axios.create({
  baseURL: "https://api.coingecko.com/api/v3"
})

class Coin {
  constructor(current_price, id, image, name, symbol, date, investment) {
    this.id = id
    this.current_price = current_price
    this.image = image
    this.name = name
    this.symbol = symbol
    this.calculateProfitLoss(date, investment)
  }

  async calculateProfitLoss(date, investment) {
    try {
      const price = await coingecko.get(
        `https://api.coingecko.com/api/v3/coins/${this.id}/history?date=${date}`
      )
      this.past_price = price.data.market_data.current_price.usd
      this.coins_owned = investment / this.past_price
      this.profit_loss = this.coins_owned * this.current_price
    } catch (error) {
      return null
    }
  }
}

const getCryptoData = async (date, investment) => {
  const todaysTop100 = await coingecko.get(
    "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  )

  return todaysTop100.data.map(coin => {
    return new Coin(
      coin.current_price,
      coin.id,
      coin.image,
      coin.name,
      coin.symbol,
      date,
      investment
    )
  })
}

export default getCryptoData
