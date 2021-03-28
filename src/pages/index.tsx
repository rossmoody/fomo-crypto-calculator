import React, { useState, useEffect } from "react"
import ThemeContainer from "../theme/theme-provider"
import getCryptoData from "../api/api"
import { Header, Hero, ProfitLoss, Footer } from "../components"

async function calculateAllCoins(marketData, date, investment) {
  if (date.hasOwnProperty("response")) {
    switch (date.response) {
      case "future":
        return "future"

      case "past":
        return "past"

      default:
        return "error"
    }
  }

  const processedCoins = await Promise.all(
    marketData.map(coin => {
      return coin.calculateProfitLoss(date, investment)
    })
  )

  const coinsWithPastPrice = processedCoins.filter(i => i)
  const sortedCoins = coinsWithPastPrice.sort(
    (a, b) => b.profit_loss - a.profit_loss
  )
  return sortedCoins
}

function calculateCurrentCoins(coins, investment) {
  if (!coins) return

  return coins.map(coin => {
    coin.doBigBrainMath(investment)
    return coin
  })
}

async function init() {
  const cryptoData = await getCryptoData()
  return calculateAllCoins(cryptoData, "01-06-2016", 100)
}

const IndexPage = () => {
  let todaysMarketData: Array<any> | string
  const [investment, setInvestment] = useState(100)
  const [coins, setCoins] = useState<boolean | Array<any> | string>(false)

  useEffect(() => {
    init().then(result => {
      todaysMarketData = result
      setCoins(result)
    })
  })

  return (
    <ThemeContainer>
      <Header />
      <Hero
        setDate={async date => {
          setCoins(false)
          const coins = await calculateAllCoins(
            todaysMarketData,
            date,
            investment
          )
          setCoins(coins)
        }}
        setInvestment={money => {
          setInvestment(money)
          setCoins(calculateCurrentCoins(coins, money))
        }}
      />
      <ProfitLoss coins={coins} />
      <Footer />
    </ThemeContainer>
  )
}

export default IndexPage
