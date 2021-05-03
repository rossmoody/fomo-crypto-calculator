import React from 'react'
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useBreakpointValue,
} from '@chakra-ui/react'

import { Coin } from '..'

import { CoinPanel } from './coin-panel'

interface CoinsProperties {
  coins: Coin[]
}

export const TabContainer = ({ coins }: CoinsProperties) => {
  const size = useBreakpointValue({ base: 'sm', md: 'md' })

  const tabs = {
    'All coins': {
      sort: (coinA: Coin, coinB: Coin) => {
        if (coinA.name < coinB.name) return -1
        return 1
      },
      filterCoin: (coin: Coin) => Boolean(coin.profit_loss),
    },
    Gainers: {
      sort: (coinA: Coin, coinB: Coin) =>
        coinB.profit_loss &&
        coinA.profit_loss &&
        coinB.profit_loss - coinA.profit_loss,

      filterCoin: (coin: Coin) => Boolean(coin.roi && coin.roi > 0),
    },
    Losers: {
      sort: (coinA: Coin, coinB: Coin) => {
        if (coinA.name < coinB.name) return -1
        return 1
      },
      filterCoin: (coin: Coin) => Boolean(coin.roi && coin.roi <= 0),
    },
  }

  return (
    <Tabs
      variant="soft-rounded"
      colorScheme="brand"
      defaultIndex={1}
      w="2xl"
      isLazy
      size={size}
    >
      <TabList px={4}>
        {Object.keys(tabs).map((tab) => (
          <Tab key={tab}>{tab}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {Object.keys(tabs).map((tab) => (
          <TabPanel key={tab} px={0} py={8}>
            <CoinPanel
              data={coins
                .filter(
                  (coin) =>
                    Boolean(coin.roi) &&
                    Boolean(coin.past_price) &&
                    tabs[tab].filterCoin(coin)
                )
                .sort(tabs[tab].sort)}
            />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}
