import React from 'react'
import { Flex } from '@chakra-ui/react'

import { getContext } from '..'

import { TabContainer } from './tab-container'
import { CoinLoader } from './coin-loader'

export const CoinList = (): JSX.Element => {
  const { state } = getContext()

  if (state.coins.length > 0)
    return (
      <Flex justifyContent="center" as="main" mb={12}>
        <TabContainer coins={state.coins} />
      </Flex>
    )

  return <CoinLoader />
}
