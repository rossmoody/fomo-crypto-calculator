import { Coin } from '..'

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
  coins?: Coin[]
}

export const reducer = (previousState: State, action: Action): State => {
  const { type, date, investment, marketData, coin, coins } = action

  switch (type) {
    case 'update':
      return {
        ...previousState,
        date,
        investment,
      }

    case 'init':
      return {
        ...previousState,
        marketData,
      }

    case 'replaceCoins':
      return {
        ...previousState,
        coins,
      }

    case 'addCoin':
      return {
        ...previousState,
        coins: [...previousState.coins, coin],
      }

    case 'reinvest':
      return {
        ...previousState,
        coins: previousState.coins.map((coin) =>
          coin.doBigBrainMath(previousState.investment)
        ),
      }

    case 'reset':
      return {
        ...previousState,
        coins: [],
      }
  }
}
