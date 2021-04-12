const axios = require("axios")

class Coin {
  id: string
  current_price: number
  image: string
  name: string
  symbol: string
  past_price: null | number
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
    this.past_price = null
  }

  async getPastPrice(date: string) {
    try {
      const { data }: { data: number | null } = await axios.get(
        "/.netlify/functions/price-history",
        {
          params: {
            id: this.id,
            history: date
          }
        }
      )

      this.past_price = data
    } catch (error) {
      console.log(error, "Error getting past price")
    }

    return this
  }

  doBigBrainMath(initInvestment: number) {
    if (!this.past_price) return this

    this.coins_owned = initInvestment / this.past_price
    this.profit_loss = Math.round(this.coins_owned * this.current_price)
    this.roi = Math.round(
      ((this.profit_loss - initInvestment) / initInvestment) * 100
    )
    return this
  }
}

export default Coin
