import { State, Action } from './reducer'
import { Coin } from '../'

export function updateCoins(
  state: State,
  callback: React.Dispatch<Action>
): void {
  state.marketData.forEach(async (coin: Coin) => {
    await coin.getPastPrice(state.date)
    coin.doBigBrainMath(state.investment)
    callback({ type: 'addCoin', coin })
  })
}
