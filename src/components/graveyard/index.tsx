import React from 'react'
import { Flex, VStack, Text, useColorModeValue } from '@chakra-ui/react'
import { getContext, Tombstone } from '../'

export const Graveyard = () => {
  const { state } = getContext()

  const tombstoneCoins = state.coins.filter((coin) => !coin.past_price)

  return (
    <Flex
      justifyContent='center'
      my={8}
      px={4}
      display={tombstoneCoins.length ? 'flex' : 'none'}
    >
      <VStack w='2xl' px={[2, 4]}>
        <Text
          mb={3}
          textAlign='center'
          color={useColorModeValue('gray.500', 'gray.200')}
        >
          No pricing information available for these coins on that date...
        </Text>

        <Flex
          justifyContent='center'
          alignItems='center'
          flexWrap='wrap'
          maxW='md'
        >
          {tombstoneCoins.map((coin, index) => {
            return <Tombstone coin={coin} key={index} />
          })}
        </Flex>
      </VStack>
    </Flex>
  )
}
