import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useMemo
} from 'react'
import theme from '../../theme/theme'
import { useQueryParam, NumberParam, StringParam } from 'use-query-params'
import { ChakraProvider } from '@chakra-ui/react'
import { reducer, State, Action } from './reducer'
import { getCoins } from '../'
import { updateCoins } from './update-coins'

interface Context {
  state: State
  dispatch: React.Dispatch<Action>
}

const Context = createContext(null)

export const getContext = (): Context => useContext<Context>(Context)

export const Layout: React.FC = ({ children }) => {
  const [queryInv, setQueryInv] = useQueryParam('investment', NumberParam)
  const [queryDate, setQueryDate] = useQueryParam('date', StringParam)

  const initialState: State = {
    marketData: null,
    investment: queryInv || 100,
    date: queryDate || '2018-01-20',
    coins: []
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    getCoins().then((marketData) => {
      dispatch({ type: 'init', marketData })
    })
  }, [])

  useMemo(() => {
    if (!state.marketData) return

    updateCoins(state, dispatch)
  }, [state.marketData])

  useMemo(() => {
    if (!state.marketData) return

    dispatch({ type: 'reset' })
    setQueryDate(state.date)
    updateCoins(state, dispatch)
  }, [state.date])

  useMemo(() => {
    if (!state.marketData) return

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
