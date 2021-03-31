import React, { useState, useEffect } from "react"
import ThemeContainer from "../theme/theme-provider"
import { Footer, Header, Hero, ProfitLoss } from "../components"
import getCoins from "../api/get-coins"
import Coin from "../api/process-coins"

const IndexPage = () => {
  const [marketData, setMarketData] = useState([])
  const [coins, setCoins] = useState([])
  const [date, setDate] = useState("01-06-2016")
  const [investment, setInvestment] = useState(100)

  function updateCoinList(coinList: Coin[]) {
    setCoins([])
    coinList.forEach(async dailyCoin => {
      const coin = await dailyCoin.getPastPrice(date, investment)
      if (coin.past_price) {
        setCoins(prevCoins => [...prevCoins, coin])
      }
    })
  }

  function recalculateCoinList(coinList: Coin[]) {
    const calcCoins = coinList.map(coin => {
      return coin.doBigBrainMath(investment)
    })
    setCoins(calcCoins)
  }

  useEffect(() => {
    getCoins().then(todaysMarketData => {
      setMarketData(todaysMarketData)
      updateCoinList(todaysMarketData)
    })
  }, [])

  useEffect(() => {
    recalculateCoinList(coins)
  }, [investment])

  useEffect(() => {
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
