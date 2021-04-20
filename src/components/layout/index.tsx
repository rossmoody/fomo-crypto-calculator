import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { useQueryParam, NumberParam, StringParam } from 'use-query-params'
import { ChakraProvider } from '@chakra-ui/react'
import { reducer, State, Action } from './reducer'
import { getCoins, Coin } from '../'
import theme from '../../theme/theme'

const Context = createContext(null)

export const getContext = (): Context => useContext<Context>(Context)

interface Context {
  state: State
  dispatch: React.Dispatch<Action>
}

const coinUpdate = async (state: State) => {
  const coins: Promise<Coin>[] = state.marketData.map(async (coin: Coin) => {
    await coin.getPastPrice(state.date)
    coin.doBigBrainMath(state.investment)
    return coin
  })

  return await Promise.all(coins)
}

export const Layout: React.FC = ({ children }) => {
  const [qInvestment, setQInvestment] = useQueryParam('investment', NumberParam)
  const [qDate, setQDate] = useQueryParam('date', StringParam)

  const initialState: State = {
    marketData: [],
    investment: qInvestment || 100,
    date: qDate || '2018-01-20',
    coins: []
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    async function init() {
      const marketData = await getCoins()
      dispatch({ type: 'init', marketData })
      dispatch({ type: 'replaceCoins', coins: await coinUpdate(state) })
    }

    init()
  }, [])

  useEffect(() => {
    if (!state) return
    dispatch({ type: 'reset' })
    setQDate(state.date)
    coinUpdate(state).then((result) =>
      dispatch({ type: 'replaceCoins', coins: result })
    )
  }, [state?.date])

  useEffect(() => {
    if (!state || !state.coins.length) return

    setQInvestment(state.investment)

    setTimeout(() => {
      dispatch({ type: 'reinvest' })
    }, 1000)
  }, [state?.investment])

  return (
    <ChakraProvider theme={theme}>
      <Context.Provider value={{ state, dispatch }}>
        {children}
      </Context.Provider>
    </ChakraProvider>
  )
}
