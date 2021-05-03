import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useMemo,
} from 'react'
import { useQueryParam, NumberParam, StringParam } from 'use-query-params'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../../theme/theme'
import { getCoins } from '../coin'

import { reducer, State } from './reducer'

interface Context {
  state: State
  dispatch: React.Dispatch<State>
}

const Context = createContext({})

export const GetContext = () => useContext<Context>(Context)

export const Layout: React.FC = ({ children }) => {
  const [queryInv, setQueryInv] = useQueryParam('investment', NumberParam)
  const [queryDate, setQueryDate] = useQueryParam('date', StringParam)

  const initialInvestment = queryInv ? queryInv : 100
  const initialDate = queryDate ? queryDate : '2020-01-20'

  const initialState: State = {
    marketData: [],
    investment: initialInvestment,
    date: initialDate,
    coins: [],
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    getCoins()
      .then((marketData) => dispatch({ type: 'init', marketData }))
      .catch(() => dispatch({ type: 'init', marketData: [] }))
  }, [])

  function updateCoins() {
    for (const coin of state.marketData) {
      coin
        .getPastPrice(state.date)
        .then((roundOneCoin) => {
          return roundOneCoin.doBigBrainMath(state.investment)
        })
        .then((roundTwoCoin) =>
          dispatch({ type: 'addCoin', coin: roundTwoCoin })
        )
        .catch(() => {})
    }
  }

  useMemo(() => {
    if (state.marketData.length === 0) return
    updateCoins()
  }, [state.marketData])

  useMemo(() => {
    if (state.marketData.length === 0) return

    dispatch({ type: 'reset' })
    setQueryDate(state.date)
    updateCoins()
  }, [state.date])

  useMemo(() => {
    if (state.marketData.length === 0) return

    setQueryInv(state.investment)
    setTimeout(dispatch, 1000, { type: 'reinvest' })
  }, [state.investment])

  return (
    <ChakraProvider theme={theme}>
      <Context.Provider value={{ state, dispatch }}>
        {children}
      </Context.Provider>
    </ChakraProvider>
  )
}
