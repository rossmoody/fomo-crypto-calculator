import { Coin } from '../'

type ActionType =
  | 'update'
  | 'init'
  | 'addCoin'
  | 'reinvest'
  | 'reset'
  | 'replaceCoins'

export interface State {
  marketData: Coin[]
  investment: number
  date: string
  coins: Coin[]
}

export interface Action {
  type: ActionType
  date?: string
  investment?: number
  marketData?: Coin[]
  coin?: Coin
  coins?: any
}

export const reducer = (prevState: State, action: Action) => {
  const { type, date, investment, marketData, coin, coins } = action

  switch (type) {
    case 'update':
      return {
        ...prevState,
        date,
        investment
      }

    case 'init':
      return {
        ...prevState,
        marketData
      }

    case 'replaceCoins':
      return {
        ...prevState,
        coins
      }

    case 'addCoin':
      return {
        ...prevState,
        coins: [...prevState.coins, coin]
      }

    case 'reinvest':
      return {
        ...prevState,
        coins: prevState.coins.map((coin) =>
          coin.doBigBrainMath(prevState.investment)
        )
      }

    case 'reset':
      return {
        ...prevState,
        coins: []
      }
  }
}
