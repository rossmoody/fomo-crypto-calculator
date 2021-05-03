import axios from 'axios'

export class Coin {
  id: string
  current_price: number
  image: string
  name: string
  symbol: string
  past_price: undefined | number
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
    this.past_price = undefined
  }

  async getPastPrice(date: string): Promise<this> {
    try {
      const { data }: { data: number | undefined } = await axios.get(
        '/.netlify/functions/price-history',
        {
          params: {
            id: this.id,
            history: date,
          },
        }
      )
      this.past_price = data
    } catch {
      this.past_price = undefined
    }

    return this
  }

  doBigBrainMath(initInvestment: number): this {
    if (!this.past_price) return this

    this.coins_owned = initInvestment / this.past_price
    this.profit_loss = Math.round(this.coins_owned * this.current_price)
    this.roi = Math.round(
      ((this.profit_loss - initInvestment) / initInvestment) * 100
    )
    return this
  }
}

export async function getCoins(): Promise<Coin[]> {
  try {
    const { data } = await axios.get('/.netlify/functions/market-data')
    return data.map((coin: Coin) => {
      return new Coin(
        coin.id,
        coin.current_price,
        coin.image,
        coin.name,
        coin.symbol
      )
    })
  } catch {
    return []
  }
}
