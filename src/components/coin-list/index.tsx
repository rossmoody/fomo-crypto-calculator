import React from 'react'
import { Flex } from '@chakra-ui/react'
import { getContext, Coin } from '../'
import { TabContainer } from './tab-container'
import { CoinLoader } from './coin-loader'

export const CoinList = () => {
  const { state } = getContext()

  const data = [
    {
      label: 'All coins',
      coins: state.coins,
      sort: (a: Coin, b: Coin) => {
        if (a.name < b.name) return -1
      },
      slice: state.coins.length,
      filter: (coin: Coin) => coin.roi
    },
    {
      label: 'Gainers',
      coins: state.coins,
      sort: (a: Coin, b: Coin) => b.profit_loss - a.profit_loss,
      slice: 25,
      filter: (coin: Coin) => coin.roi > 0
    },
    {
      label: 'Losers',
      coins: state.coins,
      sort: (a: Coin, b: Coin) => a.profit_loss - b.profit_loss,
      slice: 25,
      filter: (coin: Coin) => coin.roi <= 0
    }
  ]

  if (state.coins.length)
    return (
      <Flex justifyContent='center' as='main' mb={12}>
        <TabContainer data={data} />
      </Flex>
    )

  return <CoinLoader />
}
