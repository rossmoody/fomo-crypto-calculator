import React, { useState, useEffect } from "react"
import { Coin, Footer, Header, Hero, ProfitLoss } from "../components"
import getCoins from "../api/get-coins"

type Result = "loading" | "error" | "past" | "future" | "empty" | "valid"

export interface ICoinState {
  data: Coin[]
  result: Result
}

const HomePage = () => {
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

    todaysMarketData.forEach(async dailyCoin => {
      const coin = await dailyCoin.getPastPrice(date)

      coin.doBigBrainMath(investment)

      setCoinState(prevState => {
        return {
          data: [...prevState.data, coin],
          result: "valid"
        }
      })
    })
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
    if (
      !marketData.length ||
      coinState.result === "error" ||
      coinState.result === "past" ||
      coinState.result === "future" ||
      coinState.result === "empty"
    )
      return
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
    <>
      <Header />
      <Hero setDate={setDate} setInvestment={setInvestment} />
      <ProfitLoss coinState={coinState} />
      <Footer />
    </>
  )
}

export default HomePage
