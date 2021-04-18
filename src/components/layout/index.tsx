import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { reducer, State, Action } from './reducer'
import { getCoins } from '../'
import theme from '../../theme/theme'

interface Context {
  state: State
  dispatch: React.Dispatch<Action>
}

const initialState: State = {
  marketData: [],
  investment: 100,
  date: '2018-01-20',
  coins: []
}

const Context = createContext(null)

export const Layout: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    getCoins().then((todaysMarketData) => {
      dispatch({ type: 'init', marketData: todaysMarketData })
      todaysMarketData.forEach(async (coin) => {
        await coin.getPastPrice(state.date)
        dispatch({
          type: 'addCoin',
          coin: coin.doBigBrainMath(state.investment)
        })
      })
    })
  }, [])

  useEffect(() => {
    if (!state || !state.coins.length) return
    dispatch({ type: 'reinvest' })
  }, [state?.investment])

  useEffect(() => {
    if (!state) return
    dispatch({ type: 'reset' })
    setTimeout(() => {
      state.marketData.forEach(async (dailyCoin) => {
        const coin = await dailyCoin.getPastPrice(state.date)
        coin.doBigBrainMath(state.investment)
        dispatch({ type: 'addCoin', coin })
      })
    }, 1000)
  }, [state?.date])

  return (
    <ChakraProvider theme={theme}>
      <Context.Provider value={{ state, dispatch }}>
        {children}
      </Context.Provider>
    </ChakraProvider>
  )
}

export const getContext = () => useContext<Context>(Context)
