const axios = require("axios")
const bitcoinData = require("../data/bitcoin.json")

class Coin {
  constructor(current_price, id, image, name, symbol) {
    this.id = id
    this.current_price = current_price
    this.image = image
    this.name = name
    this.symbol = symbol
  }

  doBigBrainMath(initInvestment) {
    this.coins_owned = (initInvestment / this.past_price).toFixed(3)
    this.profit_loss = Math.round(this.coins_owned * this.current_price)
    this.roi = Math.round(
      ((this.profit_loss - initInvestment) / initInvestment) * 100
    )
  }

  async calculateProfitLoss(date, investment) {
    const splitDate = date.split("-")
    const [day, month, year] = splitDate
    const newDate = `${year}-${month}-${day}`

    if (year < 2013) {
      if (this.id === "bitcoin") {
        for (const day of bitcoinData) {
          if (newDate === day.date) {
            this.past_price = day.value
            this.doBigBrainMath(investment)
            return this
          }
        }
      }

      return null
    }

    const response = await axios.get("/.netlify/functions/history", {
      params: {
        id: this.id,
        history: date
      }
    })

    if (!response.data.hasOwnProperty("market_data")) return
    this.past_price = response.data.market_data.current_price.usd
    this.doBigBrainMath(investment)
    return this
  }
}

const getCryptoData = async () => {
  try {
    const response = await axios.get("/.netlify/functions/top100")

    return response.data.map(coin => {
      return new Coin(
        coin.current_price,
        coin.id,
        coin.image,
        coin.name,
        coin.symbol
      )
    })
  } catch (error) {
    console.log("Error getting market data", error)
  }
}

export default getCryptoData