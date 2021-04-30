import React from 'react'
import {
  Flex,
  VStack,
  HStack,
  SkeletonCircle,
  Skeleton,
} from '@chakra-ui/react'

const CoinLoaderItem = () => (
  <HStack spacing={4} width="100%">
    <SkeletonCircle size="8" />
    <Skeleton h="24px" flex="2" />
    <Skeleton h="24px" flex="1" />
    <Skeleton h="24px" flex="1" />
  </HStack>
)

export const CoinLoader = (): JSX.Element => (
  <Flex as="main" mb={12} px={4} justifyContent="center">
    <VStack spacing="20px" w="2xl">
      <CoinLoaderItem />
      <CoinLoaderItem />
      <CoinLoaderItem />
    </VStack>
  </Flex>
)
