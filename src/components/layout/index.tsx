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

  function updateCoins() {
    state.marketData.forEach(async (coin: Coin) => {
      await coin.getPastPrice(state.date)
      coin.doBigBrainMath(state.investment)
      dispatch({ type: 'addCoin', coin })
    })
  }

  useEffect(() => {
    getCoins().then((marketData) => {
      dispatch({ type: 'init', marketData })
    })
  }, [])

  useEffect(() => {
    if (!state) return
    updateCoins()
  }, [state?.marketData])

  useEffect(() => {
    if (!state) return
    dispatch({ type: 'reset' })
    setQDate(state.date)
    updateCoins()
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
