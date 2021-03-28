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

  let coins = processedCoins.filter(i => i)
  coins = coins.sort((a, b) => b.profit_loss - a.profit_loss)
  return coins
}

function calculateCurrentCoins(coins, investment) {
  if (!coins) return

  return coins.map(coin => {
    coin.doBigBrainMath(investment)
    return coin
  })
}

const IndexPage = () => {
  const [todaysMarketData, setTodaysMarketData] = useState()
  const [investment, setInvestment] = useState(100)
  const [coins, setCoins] = useState()

  useEffect(() => {
    if (!todaysMarketData) {
      getCryptoData().then(cryptoData => {
        setTodaysMarketData(cryptoData)
        calculateAllCoins(cryptoData, "01-06-2012", investment).then(result => {
          setCoins(result)
        })
      })
    }
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
