import React, { useState, useEffect } from "react"
import ThemeContainer from "./theme-provider"
import getCryptoData from "../controllers/coin-controller"
import { Header, Hero, ProfitLoss } from "../components"

async function setProfitLoss(callback, data, date, investment) {
  const processedCoins = data.map(coin => {
    return coin.calculateProfitLoss(date, investment)
  })

  Promise.all(processedCoins).then(coin => {
    callback(coin.filter(i => i))
  })
}

const IndexPage = () => {
  let todaysMarketData
  const [coins, setCoins] = useState()
  const [date, setDate] = useState("30-12-2015")
  const [investment, setInvestment] = useState(100)

  useEffect(() => {
    if (!todaysMarketData) {
      getCryptoData().then(result => {
        todaysMarketData = result
        setProfitLoss(setCoins, todaysMarketData, date, investment)
      })
    }
  }, [])

  return (
    <ThemeContainer>
      <Header />
      <Hero />
      <ProfitLoss coins={coins} />
    </ThemeContainer>
  )
}

export default IndexPage
