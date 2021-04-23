import React, { useCallback, useEffect, useState } from 'react'
import { Box, Flex, VStack, Text, SlideFade, Divider } from '@chakra-ui/react'
import { getContext, Tombstone } from '../'

const debounce = (callback, wait) => {
  let timeoutId = null

  return (...args) => {
    window.clearTimeout(timeoutId)
    timeoutId = window.setTimeout(() => {
      callback(args)
    }, wait)
  }
}

export const Graveyard = (): JSX.Element => {
  const { state } = getContext()

  const [open, setOpen] = useState(false)
  const [tombstones, setTombstones] = useState([])

  useEffect(() => {
    setOpen(false)

    const debounceTombstones = debounce(() => {
      setTombstones(
        state.coins
          .filter((coin) => !coin.past_price)
          .sort((a, b) => {
            if (a.id < b.id) return -1
          })
      )

      setTimeout(setOpen, 1000, true)
    }, 1000)

    debounceTombstones()
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
        <SlideFade in={open} offsetY='20px'>
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
