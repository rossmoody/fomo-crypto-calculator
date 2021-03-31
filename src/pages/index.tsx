import React, { useState, useMemo } from "react"
import ThemeContainer from "../theme/theme-provider"
import { Footer, Header, Hero, ProfitLoss } from "../components"
import getCoins from "../api/get-coins"

const IndexPage = () => {
  const [marketData, setMarketData] = useState([])
  const [coins, setCoins] = useState([])
  const [date, setDate] = useState<string>("01-06-2016")
  const [investment, setInvestment] = useState<number>(100)

  function updateCoins(data) {
    data.forEach(async dailyCoin => {
      const coin = await dailyCoin.getPastPrice(date, investment)
      if (coin.past_price) {
        setCoins(prevCoins => [...prevCoins, coin])
      }
    })
  }

  useMemo(() => {
    if (!marketData.length) {
      getCoins().then(todaysMarketData => {
        setMarketData(todaysMarketData)
        updateCoins(todaysMarketData)
      })
    }
  }, [marketData])

  useMemo(() => {
    if (Array.isArray(coins))
      coins.forEach(coin => coin.doBigBrainMath(investment))
  }, [investment])

  useMemo(() => {
    if (!marketData.length) return
    setCoins([])
    updateCoins(marketData)
  }, [date])

  return (
    <ThemeContainer>
      <Header />
      <Hero setDate={setDate} setInvestment={setInvestment} />
      <ProfitLoss coins={coins} date={date} />
      <Footer />
    </ThemeContainer>
  )
}

export default IndexPage
