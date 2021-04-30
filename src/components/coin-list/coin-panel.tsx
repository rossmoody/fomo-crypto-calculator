import React from 'react'
import {
  Center,
  SlideFade,
  VStack,
  StackDivider,
  useColorModeValue,
} from '@chakra-ui/react'

import { Coin, CoinItem } from '..'

export interface Data {
  coins: Coin[]
  label: string
  sort: (a: Coin, b: Coin) => number
  slice: number
  filter: (coin: Coin) => boolean
}

export const CoinPanel = ({ data }: { data: Data }): JSX.Element => {
  const coinArray = data.coins
    .filter((a) => a.past_price)
    .filter(data.filter)
    .slice(0, data.slice)
    .sort(data.sort)

  if (coinArray.length > 0) {
    return (
      <SlideFade offsetY="40px" in={true} style={{ width: '100%' }}>
        <VStack
          spacing="20px"
          divider={
            <StackDivider
              borderColor={useColorModeValue('gray.200', 'gray.600')}
            />
          }
        >
          {coinArray.map((coin, index) => (
            <CoinItem coin={coin} key={index} />
          ))}
        </VStack>
      </SlideFade>
    )
  }

  return <Center mt={12}>🧐 No coins to show...</Center>
}
