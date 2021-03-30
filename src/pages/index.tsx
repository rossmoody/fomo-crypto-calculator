import React, { useState, useMemo } from "react"
import ThemeContainer from "../theme/theme-provider"
import { Footer, Header, Hero, ProfitLoss } from "../components"
import getCoins from "../api/get-coins"
import Coin from "../api/process-coins"

async function calculateAllCoins(
  coinData: any,
  newDate: string,
  investment: number
) {
  const coinList: Coin[] = await Promise.all(
    coinData.map(async (coin: Coin) => {
      await coin.getPastPrice(newDate, investment)
      return coin
    })
  )

  return coinList
    .filter(i => i.past_price)
    .sort((a, b) => b.profit_loss - a.profit_loss)
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
    if (Array.isArray(coins))
      coins.forEach(coin => coin.doBigBrainMath(investment))
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
      <ProfitLoss coins={coins} date={date} />
      <Footer />
    </ThemeContainer>
  )
}

export default IndexPage
