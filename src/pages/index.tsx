import React, { useState, useEffect } from "react"
import ThemeContainer from "../theme/theme-provider"
import { Footer, Header, Hero, ProfitLoss } from "../components"
import Coin from "../api/process-coins"
import getCoins from "../api/get-coins"

const IndexPage = () => {
  const [marketData, setMarketData] = useState([])
  const [coins, setCoins] = useState([])
  const [date, setDate] = useState("01-06-2016")
  const [investment, setInvestment] = useState(100)

  function updateCoinList(coinArr: Coin[]) {
    coinArr.forEach(async dailyCoin => {
      const coin = await dailyCoin.getPastPrice(date, investment)
      if (coin.past_price) {
        setCoins(prevCoins => [...prevCoins, coin])
      }
    })
  }

  useEffect(() => {
    getCoins().then(todaysMarketData => {
      setMarketData(todaysMarketData)
      updateCoinList(todaysMarketData)
    })
  }, [])

  useEffect(() => {
    coins.forEach(coin => coin.doBigBrainMath(investment))
  }, [investment])

  useEffect(() => {
    setCoins([])
    updateCoinList(marketData)
  }, [date])

  return (
    <ThemeContainer>
      <Header />
      <Hero setDate={setDate} setInvestment={setInvestment} />
      <ProfitLoss coins={coins} />
      <Footer />
    </ThemeContainer>
  )
}

export default IndexPage
