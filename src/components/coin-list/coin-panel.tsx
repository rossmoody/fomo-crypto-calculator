import React from 'react'
import {
  Center,
  SlideFade,
  VStack,
  StackDivider,
  useColorModeValue,
} from '@chakra-ui/react'

import { Coin } from '../coin'
import { CoinItem } from '../coin-item'

export const CoinPanel = ({ data }: { data: Coin[] }) => {
  const borderColor = useColorModeValue('gray.200', 'gray.600')

  if (data.length > 0) {
    return (
      <SlideFade offsetY="40px" in={true} style={{ width: '100%' }}>
        <VStack
          spacing="20px"
          divider={<StackDivider borderColor={borderColor} />}
        >
          {data.map((coin, index) => (
            <CoinItem coin={coin} key={index} />
          ))}
        </VStack>
      </SlideFade>
    )
  }

  return (
    <Center mt={12}>
      <span
        role="img"
        aria-label="No coins emoji"
        style={{ marginRight: '8px' }}
      >
        🧐
      </span>
      No coins to show...
    </Center>
  )
}
