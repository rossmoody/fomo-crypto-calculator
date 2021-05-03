import React, { useEffect, useState } from 'react'
import { Box, Flex, VStack, Text, SlideFade, Divider } from '@chakra-ui/react'

import { GetContext } from '../layout'
import { Coin } from '../coin'
import { Tombstone } from '../tombstone'

const filteredTombstones = (coins: Coin[]): Coin[] =>
  coins
    .filter((coin) => !coin.past_price)
    .sort((CoinA, CoinB) => {
      if (CoinA.id < CoinB.id) return -1
      return 1
    })

let timer

export const Graveyard = (): JSX.Element => {
  const { state } = GetContext()

  const [tombstones, setTombstones] = useState<Coin[]>([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    clearTimeout(timer)
    setTimeout(setTombstones, 1000, filteredTombstones(state.coins))
    if (filteredTombstones.length > 0) setTimeout(setOpen, 3000, true)
  }, [state.coins])

  return (
    <Flex
      justifyContent="center"
      my={8}
      px={4}
      minH="200px"
      display={open ? 'flex' : 'none'}
    >
      <Box width="2xl">
        <SlideFade
          in={open}
          offsetY="20px"
          unmountOnExit
          style={{ transitionDelay: '500ms' }}
        >
          <VStack px={[2, 4]} spacing={4}>
            <Divider mb={8} />
            <Text mb={3} textAlign="center" color="gray.500">
              No pricing information available for these coins on that date...
            </Text>

            <Flex
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              maxW="xl"
            >
              {tombstones.map((coin, index) => {
                return <Tombstone coin={coin} key={index} />
              })}
            </Flex>
          </VStack>
        </SlideFade>
      </Box>
    </Flex>
  )
}
