import React, { useEffect, useState } from 'react'
import { Box, Flex, VStack, Text, SlideFade, Divider } from '@chakra-ui/react'
import { getContext, Tombstone } from '../'

export const Graveyard = () => {
  const { state } = getContext()

  const [open, setOpen] = useState(false)

  let timer

  useEffect(() => {
    setOpen(false)
    clearTimeout(timer)
    timer = setTimeout(() => {
      if (state.coins.filter((coin) => !coin.past_price).length != 0)
        setOpen(true)
    }, 2000)
  }, [state.coins])

  return (
    <Flex
      justifyContent='center'
      my={8}
      px={4}
      minH='200px'
      display={open ? 'flex' : 'none'}
    >
      <Box width='2xl'>
        <SlideFade in={open} offsetY='20px' reverse>
          <VStack px={[2, 4]} spacing={4}>
            <Divider mb={8} />
            <Text mb={3} textAlign='center' color='gray.500'>
              No pricing information available for these coins on that date...
            </Text>

            <Flex
              justifyContent='center'
              alignItems='center'
              flexWrap='wrap'
              maxW='xl'
            >
              {state.coins
                .filter((coin) => !coin.past_price)
                .sort((a, b) => {
                  if (a.id < b.id) return -1
                })
                .map((coin, index) => {
                  return <Tombstone coin={coin} key={index} />
                })}
            </Flex>
          </VStack>
        </SlideFade>
      </Box>
    </Flex>
  )
}
