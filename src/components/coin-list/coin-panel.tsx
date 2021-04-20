import React from 'react'
import { Coin, CoinItem } from '../'
import {
  Center,
  SlideFade,
  VStack,
  StackDivider,
  useColorModeValue
} from '@chakra-ui/react'

export interface Data {
  coins: Coin[]
  label: string
  sort: (a: Coin, b: Coin) => number
  slice: number
  filter: (coin: Coin) => boolean
}

export const CoinPanel = ({ data }: { data: Data }): JSX.Element => {
  const coinArr = data.coins
    .filter((a) => a.past_price)
    .filter(data.filter)
    .slice(0, data.slice)
    .sort(data.sort)

  if (coinArr.length) {
    return (
      <SlideFade offsetY='40px' in={true} style={{ width: '100%' }}>
        <VStack
          spacing='20px'
          divider={
            <StackDivider
              borderColor={useColorModeValue('gray.200', 'gray.600')}
            />
          }
        >
          {coinArr.map((coin, index) => (
            <CoinItem coin={coin} key={index} />
          ))}
        </VStack>
      </SlideFade>
    )
  }

  return <Center mt={12}>🧐 No coins to show...</Center>
}
