import React, { useState, useEffect } from "react"
import ThemeContainer from "../theme/theme-provider"
import { Coin, Footer, Header, Hero, ProfitLoss } from "../components"
import getCoins from "../api/get-coins"

export interface ICoinState {
  data: Coin[]
  loading: boolean
  validation: {
    error: boolean
    past: boolean
    future: boolean
  }
}

const IndexPage = () => {
  const [date, setDate] = useState("01-06-2016")
  const [investment, setInvestment] = useState(100)
  const [marketData, setMarketData] = useState([])
  const [coinState, setCoinState] = useState<ICoinState>({
    data: [],
    loading: true,
    validation: {
      error: false,
      past: false,
      future: false
    }
  })

  async function updateCoinList(todaysMarketData: Coin[]) {
    setCoinState({
      data: [],
      loading: true,
      validation: {
        error: false,
        past: false,
        future: false
      }
    })

    todaysMarketData.forEach((dailyCoin, index, arr) => {
      const rateLimiterBase = 200

      setTimeout(async () => {
        const coin = await dailyCoin.getPastPrice(date, investment)
        if (coin.past_price) {
          setCoinState(prevState => {
            return {
              data: [...prevState.data, coin],
              loading: false,
              validation: {
                error: false,
                past: false,
                future: false
              }
            }
          })
        }

        if (index === arr.length - 1) {
          setCoinState(prevState => {
            return {
              data: prevState.data,
              loading: false,
              validation: {
                error: false,
                past: false,
                future: false
              }
            }
          })
        }
      }, rateLimiterBase * index)
    })
  }

  function recalculateCoinList(coinList: ICoinState) {
    const calcCoins = coinList.data.map(coin => {
      return coin.doBigBrainMath(investment)
    })
    setCoinState({
      data: calcCoins,
      loading: false,
      validation: {
        error: false,
        past: false,
        future: false
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
    if (!marketData.length) return
    recalculateCoinList(coinState)
  }, [investment])

  useEffect(() => {
    if (!marketData.length) return
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
