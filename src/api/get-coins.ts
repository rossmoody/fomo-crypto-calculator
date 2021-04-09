const axios = require("axios")
import { Coin } from "../components"

async function getCoins(): Promise<Coin[]> {
  try {
    const { data } = await axios.get("/.netlify/functions/top100")

    return data.map((coin: Coin) => {
      return new Coin(
        coin.id,
        coin.current_price,
        coin.image,
        coin.name,
        coin.symbol
      )
    })
  } catch (error) {
    console.log("Error getting market data", error)
    return []
  }
}

export default getCoins
