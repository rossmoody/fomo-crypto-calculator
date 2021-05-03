import { Coin } from '../coin'

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
  marketData?: Coin[]
  date?: string
  investment?: number
  coin?: Coin
  coins?: Coin[]
}

export const reducer = (previousState: State, action: Action): State => {
  const { type, date, investment, marketData, coin, coins } = action

  switch (type) {
    case 'update':
      if (date && investment)
        return {
          ...previousState,
          date,
          investment,
        }
      break

    case 'init':
      if (marketData)
        return {
          ...previousState,
          marketData,
        }
      break

    case 'replaceCoins':
      if (coins)
        return {
          ...previousState,
          coins,
        }
      break

    case 'addCoin':
      if (coin)
        return {
          ...previousState,
          coins: [...previousState.coins, coin],
        }
      break

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

  return {
    ...previousState,
  }
}
