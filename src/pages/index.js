import React, { useState, useEffect } from "react"
import ThemeContainer from "./theme-provider"
import getCryptoData from "../controllers/coin-controller"
import { Header, Hero, ProfitLoss } from "../components"

async function setProfitLoss(setCoinState, marketData, date, investment) {
  setCoinState(false) // Set false for loader

  const processedCoins = await Promise.all(
    marketData.map(coin => {
      return coin.calculateProfitLoss(date, investment)
    })
  )

  let coins = processedCoins.filter(i => i)
  if (!coins) console.log("No new coins tos how")
  coins = coins.sort((a, b) => b.profit_loss - a.profit_loss)
  setCoinState(coins)
}

// Earliest date for Bitcoin from CoinGecko -> 01-05-2013

const IndexPage = () => {
  const [todaysMarketData, setTodaysMarketData] = useState()
  const [date, setDate] = useState("01-06-2016") // dd-mm-yyyy
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
