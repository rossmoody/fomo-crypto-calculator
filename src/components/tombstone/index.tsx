import React from 'react'
import { Circle, useColorModeValue, Tooltip } from '@chakra-ui/react'

import { Coin } from '../coin'
import { CoinIcon } from '../coin-icon'

export const Tombstone = ({ coin }: { coin: Coin }): JSX.Element => {
  return (
    <Tooltip label={coin.name} placement="top" hasArrow>
      <Circle
        tabIndex={0}
        p={1}
        my="4px"
        ml="-6px"
        border="1px solid"
        bg={useColorModeValue('white', 'gray.800')}
        borderColor={useColorModeValue('gray.200', 'gray.600')}
        _hover={{
          transform: 'scale(1.4)',
          cursor: 'pointer',
          zIndex: '1000',
        }}
        aria-label={`${coin.name} tooltip`}
      >
        <CoinIcon coin={coin} size="24px" />
      </Circle>
    </Tooltip>
  )
}
