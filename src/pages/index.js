import React, { useState, useEffect } from "react"
import ThemeContainer from "./theme-provider"
import getCryptoData from "../controllers/coin-controller"
import { Header, Hero, ProfitLoss } from "../components"

async function setProfitLoss(setCoinState, coins, date, investment) {
  const processedCoins = coins.map(coin => {
    return coin.calculateProfitLoss(date, investment)
  })

  Promise.all(processedCoins).then(coin => {
    setCoinState(coin.filter(i => i))
  })
}

const IndexPage = () => {
  const [todaysMarketData, setTodaysMarketData] = useState()
  const [date, setDate] = useState("18-10-2017")
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

    console.log("Date being passed in dd-mm-yyyy: ", date)
    console.log("Money passed in: ", investment)
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
