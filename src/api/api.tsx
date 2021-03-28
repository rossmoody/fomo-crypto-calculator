const axios = require("axios")
const bitcoinData = require("../data/bitcoin.json")

class Coin {
  id: string
  current_price: number
  image: string
  name: string
  symbol: string
  coins_owned: number
  roi: number
  profit_loss: number
  past_price: number

  constructor(
    current_price: number,
    id: string,
    image: string,
    name: string,
    symbol: string
  ) {
    this.id = id
    this.current_price = current_price
    this.image = image
    this.name = name
    this.symbol = symbol
  }

  doBigBrainMath(initInvestment: number) {
    this.coins_owned = initInvestment / this.past_price
    this.profit_loss = Math.round(this.coins_owned * this.current_price)
    this.roi = Math.round(
      ((this.profit_loss - initInvestment) / initInvestment) * 100
    )
  }

  async calculateProfitLoss(date: string, investment: number) {
    const splitDate = date.split("-")
    const [day, month, year] = splitDate
    const newDate = `${year}-${month}-${day}`

    if (+year < 2013) {
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

    const { data } = await axios.get("/.netlify/functions/history", {
      params: {
        id: this.id,
        history: date
      }
    })

    if (!data.hasOwnProperty("market_data")) return
    this.past_price = data.market_data.current_price.usd
    this.doBigBrainMath(investment)
    return this
  }
}

async function getCryptoData(): Promise<Array<Coin>> {
  try {
    const { data } = await axios.get("/.netlify/functions/top100")
    return data.map(coin => {
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
