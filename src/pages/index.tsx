import React, { useState, useMemo } from "react"
import { Header, Hero, ProfitLoss, Footer } from "../components"
import ThemeContainer from "../theme/theme-provider"
import getCoins from "../api/get-coins"
import Coin from "../api/process-coins"

async function calculateAllCoins(coinData, newDate, investment) {
  const sortDescending = (coinOne, coinTwo) =>
    coinTwo.profit_loss - coinOne.profit_loss

  const coinList: Coin[] = await Promise.all(
    coinData.map(async (coin: Coin) => {
      await coin.getPastPrice(newDate, investment)
      return coin
    })
  )

  return coinList.filter(i => i.past_price).sort(sortDescending)
}

function calculateCurrentCoins(coins: Coin[], investment: number): Coin[] {
  return coins.map((coin: Coin) => {
    coin.doBigBrainMath(investment)
    return coin
  })
}

const IndexPage = () => {
  const [marketData, setMarketData] = useState<Coin[] | boolean>()
  const [coins, setCoins] = useState<Coin[] | boolean>(false)
  const [date, setDate] = useState<string>("01-06-2016")
  const [investment, setInvestment] = useState<number>(100)

  useMemo(() => {
    if (!marketData) {
      getCoins().then(coinList => {
        setMarketData(coinList)
        calculateAllCoins(coinList, date, investment).then(setCoins)
      })
    }
  }, [marketData])

  useMemo(() => {
    if (Array.isArray(coins)) calculateCurrentCoins(coins, investment)
  }, [investment])

  useMemo(() => {
    if (!marketData) return
    setCoins(false)
    calculateAllCoins(marketData, date, investment).then(setCoins)
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
