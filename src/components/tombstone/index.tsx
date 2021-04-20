import React from 'react'
import { Coin, CoinIcon } from '../'
import { Circle, useColorModeValue, Tooltip } from '@chakra-ui/react'

export const Tombstone = ({ coin }: { coin: Coin }): JSX.Element => {
  return (
    <Tooltip label={coin.name} placement='top' hasArrow>
      <Circle
        p={1}
        my='4px'
        ml='-6px'
        border='1px solid'
        bg={useColorModeValue('white', 'gray.800')}
        borderColor={useColorModeValue('gray.200', 'gray.600')}
        _hover={{
          transform: 'scale(1.4)',
          cursor: 'pointer',
          zIndex: '1000'
        }}
      >
        <CoinIcon coin={coin} size='24px' />
      </Circle>
    </Tooltip>
  )
}
