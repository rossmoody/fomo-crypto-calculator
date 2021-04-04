const axios = require("axios")
const bitcoinData = require("../../data/bitcoin.json")

class Coin {
  id: string
  current_price: number
  image: string
  name: string
  symbol: string
  past_price: number
  profit_loss?: number
  coins_owned?: number
  roi?: number

  constructor(
    id: string,
    current_price: number,
    image: string,
    name: string,
    symbol: string
  ) {
    this.id = id
    this.current_price = current_price
    this.image = image
    this.name = name
    this.symbol = symbol
    this.past_price = 0
  }

  async getPastPrice(date: string, investment: number) {
    try {
      const { data } = await axios.get("/.netlify/functions/history", {
        params: {
          id: this.id,
          history: date
        }
      })

      this.past_price = 0

      if (data.hasOwnProperty("market_data")) {
        this.past_price = data.market_data.current_price.usd
        this.doBigBrainMath(investment)
      }

      if (this.symbol === "btc" && !this.past_price) {
        this.getBitcoinPrice(date, investment)
      }
    } catch (error) {
      console.log(error, "Error getting past price")
    }

    return this
  }

  doBigBrainMath(initInvestment: number) {
    this.coins_owned = initInvestment / this.past_price
    this.profit_loss = Math.round(this.coins_owned * this.current_price)
    this.roi = Math.round(
      ((this.profit_loss - initInvestment) / initInvestment) * 100
    )
    return this
  }

  getBitcoinPrice(date: string, investment: number) {
    for (const day of bitcoinData) {
      if (date === day.date) {
        this.past_price = day.value
        this.doBigBrainMath(investment)
        return this
      }
    }
  }
}

export default Coin
