import React from 'react'
import { Flex } from '@chakra-ui/react'

import { GetContext } from '../layout'

import { TabContainer } from './tab-container'
import { CoinLoader } from './coin-loader'

export const CoinList = () => {
  const { state } = GetContext()

  if (state.coins.length > 0)
    return (
      <Flex justifyContent="center" as="main" mb={12}>
        <TabContainer coins={state.coins} />
      </Flex>
    )

  return <CoinLoader />
}
