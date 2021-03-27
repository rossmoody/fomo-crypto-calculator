import React, { useState, useEffect } from "react"
import ThemeContainer from "../theme/theme-provider"
import getCryptoData from "../api/api"
import { Header, Hero, ProfitLoss, Footer } from "../components"

async function setProfitLoss(setCoinState, marketData, date, investment) {
  setCoinState(false) // Set false for loader

  if (date.hasOwnProperty("response")) {
    switch (date.response) {
      case "future":
        setCoinState("future")
        return

      case "past":
        setCoinState("past")
        return

      default:
        setCoinState("error")
        return
    }
  }

  const processedCoins = await Promise.all(
    marketData.map(coin => {
      return coin.calculateProfitLoss(date, investment)
    })
  )

  let coins = processedCoins.filter(i => i)
  coins = coins.sort((a, b) => b.profit_loss - a.profit_loss)
  setCoinState(coins)
}

const IndexPage = () => {
  const [todaysMarketData, setTodaysMarketData] = useState()
  const [date, setDate] = useState("01-06-2012") // dd-mm-yyyy
  const [investment, setInvestment] = useState(100)
  const [coins, setCoins] = useState()

  useEffect(() => {
    if (!todaysMarketData) {
      getCryptoData().then(cryptoData => {
        setTodaysMarketData(cryptoData)
        setProfitLoss(setCoins, cryptoData, date, investment)
      })
    }
  })

  useEffect(() => {
    if (!todaysMarketData) return
    setProfitLoss(setCoins, todaysMarketData, date, investment)
  }, [date, investment, todaysMarketData])

  return (
    <ThemeContainer>
      <Header />
      <Hero date={setDate} investment={setInvestment} />
      <ProfitLoss coins={coins} />
      <Footer />
    </ThemeContainer>
  )
}

export default IndexPage
