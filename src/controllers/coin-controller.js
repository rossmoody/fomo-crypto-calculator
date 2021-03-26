const axios = require("axios")
const bitcoinData = require("../data/bitcoin.json")

const coingecko = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/coins",
  headers: {
    "Content-Type": "application/json"
  }
})

class Coin {
  constructor(current_price, id, image, name, symbol) {
    this.id = id
    this.current_price = current_price
    this.image = image
    this.name = name
    this.symbol = symbol
  }

  async calculateProfitLoss(date, investment) {
    try {
      const price = await coingecko.get(`/${this.id}/history?date=${date}`)
      this.past_price = price.data.market_data.current_price.usd
      this.coins_owned = (investment / this.past_price).toFixed(3)
      this.profit_loss = Math.round(this.coins_owned * this.current_price)
      this.roi = Math.round(
        ((this.profit_loss - investment) / investment) * 100
      )
      return this
    } catch (err) {
      if (this.id === "bitcoin") {
        const splitDate = date.split("-")
        const [year, month, day] = splitDate
        const newDate = `${day}-${month}-${year}`

        for (const day of bitcoinData) {
          if (newDate === day.date) {
            this.past_price = day.value
            this.coins_owned = (investment / this.past_price).toFixed(3)
            this.profit_loss = Math.round(this.coins_owned * this.current_price)
            this.roi = Math.round(
              ((this.profit_loss - investment) / investment) * 100
            )
            return this
          }
        }
      }
      // console.log(`${this.id} didn't exist on ${date}`)
    }
  }
}

const getCryptoData = async () => {
  const response = await axios.get("/.netlify/functions/netlify")
  const data = response.data
  console.log(data)

  const todaysTop100 = await coingecko.get(
    "/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
  )

  return todaysTop100.data.map(coin => {
    return new Coin(
      coin.current_price,
      coin.id,
      coin.image,
      coin.name,
      coin.symbol
    )
  })
}

export default getCryptoData
