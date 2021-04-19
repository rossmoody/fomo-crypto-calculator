import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { useQueryParam, NumberParam, StringParam } from 'use-query-params'
import { ChakraProvider } from '@chakra-ui/react'
import { reducer, State, Action } from './reducer'
import { getCoins } from '../'
import theme from '../../theme/theme'

const Context = createContext(null)

export const getContext = () => useContext<Context>(Context)

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

  useEffect(() => {
    getCoins().then((todaysMarketData) => {
      dispatch({ type: 'init', marketData: todaysMarketData })
      const initialResult = todaysMarketData.map(async (coin) => {
        await coin.getPastPrice(state.date)
        coin.doBigBrainMath(state.investment)
        return coin
      })

      Promise.all(initialResult).then((result) => {
        dispatch({
          type: 'replaceCoins',
          coins: result
        })
      })
    })
  }, [])

  useEffect(() => {
    if (!state) return
    dispatch({ type: 'reset' })
    setQDate(state.date)

    const results = state.marketData.map(async (coin) => {
      await coin.getPastPrice(state.date)
      coin.doBigBrainMath(state.investment)
      return coin
    })

    Promise.all(results).then((result) => {
      dispatch({
        type: 'replaceCoins',
        coins: result
      })
    })
  }, [state?.date])

  useEffect(() => {
    if (!state || !state.coins.length) return
    setQInvestment(state.investment)
    dispatch({ type: 'reinvest' })
  }, [state?.investment])

  return (
    <ChakraProvider theme={theme}>
      <Context.Provider value={{ state, dispatch }}>
        {children}
      </Context.Provider>
    </ChakraProvider>
  )
}
