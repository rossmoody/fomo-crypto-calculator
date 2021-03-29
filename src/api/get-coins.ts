const axios = require("axios")
import Coin from "./process-coins"

async function getCoins(): Promise<Array<any>> {
  try {
    const { data } = await axios.get("/.netlify/functions/top100")
    return data.map((coin: Coin) => {
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
    return []
  }
}

export default getCoins
