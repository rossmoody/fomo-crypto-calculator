import React, { useState, useEffect } from "react"
import ThemeContainer from "../theme/theme-provider"
import { Coin, Footer, Header, Hero, ProfitLoss } from "../components"
import getCoins from "../api/get-coins"

type Result = "loading" | "error" | "past" | "future" | "empty" | "valid"

export interface ICoinState {
  data: Coin[]
  result: Result
}

const IndexPage = () => {
  const [coinState, setCoinState] = useState<ICoinState>({
    data: [],
    result: "loading"
  })
  const [date, setDate] = useState("01-06-2016")
  const [investment, setInvestment] = useState(100)
  const [marketData, setMarketData] = useState([])

  async function updateCoinList(todaysMarketData: Coin[]) {
    setCoinState({
      data: [],
      result: "loading"
    })

    const promises = todaysMarketData.map(async dailyCoin => {
      const coin = await dailyCoin.getPastPrice(date, investment)

      if (coin.past_price) {
        setCoinState(prevState => {
          return {
            data: [...prevState.data, coin],
            result: "valid"
          }
        })
        return coin
      }
    })

    const coinPromises = await Promise.all(promises)
    const validArray = coinPromises.filter(i => i)
    if (!validArray.length) setCoinState({ data: [], result: "empty" })
  }

  function recalculateCoinList(coinList: ICoinState) {
    const calcCoins = coinList.data.map(coin => {
      return coin.doBigBrainMath(investment)
    })
    setCoinState({
      data: calcCoins,
      result: "valid"
    })
  }

  useEffect(() => {
    getCoins().then(todaysMarketData => {
      setMarketData(todaysMarketData)
      updateCoinList(todaysMarketData)
    })
  }, [])

  useEffect(() => {
    if (!marketData.length) return
    recalculateCoinList(coinState)
  }, [investment])

  useEffect(() => {
    if (!marketData.length) return
    if (date === "past") return setCoinState({ data: [], result: "past" })
    if (date === "future") return setCoinState({ data: [], result: "future" })
    if (date === "error") return setCoinState({ data: [], result: "error" })
    updateCoinList(marketData)
  }, [date])

  return (
    <ThemeContainer>
      <Header />
      <Hero setDate={setDate} setInvestment={setInvestment} />
      <ProfitLoss coinState={coinState} />
      <Footer />
    </ThemeContainer>
  )
}

export default IndexPage
