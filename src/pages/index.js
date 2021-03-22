import React, { useState, useEffect } from "react"
import ThemeContainer from "./theme-provider"
import getCryptoData from "../controllers/coin-controller"
import { Header, Hero, ProfitLoss } from "../components"

async function setProfitLoss(setCoinState, marketData, date, investment) {
  setCoinState(false) // Set false for loader

  const processedCoins = Promise.all(
    marketData.map(coin => {
      return coin.calculateProfitLoss(date, investment)
    })
  )

  let coins = await processedCoins
  coins = coins.filter(i => i)
  coins = coins.sort((a, b) => b.profit_loss - a.profit_loss)
  setCoinState(coins)
}

const IndexPage = () => {
  const [todaysMarketData, setTodaysMarketData] = useState()
  const [date, setDate] = useState("01-01-2010")
  const [investment, setInvestment] = useState(100)
  const [coins, setCoins] = useState()

  useEffect(() => {
    if (!todaysMarketData) {
      getCryptoData().then(result => {
        setTodaysMarketData(result)
        setProfitLoss(setCoins, result, date, investment)
      })
    }
  })

  useEffect(() => {
    if (!todaysMarketData) return
    console.log("state date:", date)
    console.log("state money:", investment)
    setProfitLoss(setCoins, todaysMarketData, date, investment)
  }, [date, investment, todaysMarketData])

  return (
    <ThemeContainer>
      <Header />
      <Hero date={setDate} investment={setInvestment} />
      <ProfitLoss coins={coins} />
    </ThemeContainer>
  )
}

export default IndexPage
