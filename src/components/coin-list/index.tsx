import React from 'react'
import {
  Flex,
  Skeleton,
  SkeletonCircle,
  StackDivider,
  SlideFade,
  useColorModeValue,
  HStack,
  VStack,
  TabList,
  Tab,
  Tabs,
  TabPanels,
  TabPanel
} from '@chakra-ui/react'
import { getContext, Coin } from '../'
import { CoinItem } from '../coin-item'

interface Data {
  coins: Coin[]
  label: string
  sort: any
}

const CoinContainer = ({ data }: { data: Data[] }) => {
  return (
    <Tabs
      variant='soft-rounded'
      colorScheme='brand'
      defaultIndex={1}
      isLazy
      w='2xl'
    >
      <TabList>
        {data.map((tab) => (
          <Tab key={tab.label}>{tab.label}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {data.map((obj, index) => (
          <TabPanel key={index} px={0} py={8}>
            <VStack
              spacing='20px'
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }
            >
              {obj.coins
                .filter((a) => a.past_price)
                .sort(obj.sort)
                .map((coin, index) => (
                  <SlideFade
                    offsetY='20px'
                    in={true}
                    style={{ width: '100%' }}
                    key={index.toString()}
                  >
                    <CoinItem coin={coin} />
                  </SlideFade>
                ))}
            </VStack>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}

export const CoinList = () => {
  const { state } = getContext()

  const data = [
    {
      label: 'All assets',
      coins: state.coins,
      sort: (a: Coin, b: Coin) => b.name < a.name
    },
    {
      label: 'Top gains',
      coins: state.coins,
      sort: (a: Coin, b: Coin) => b.profit_loss - a.profit_loss
    },
    {
      label: 'Top losses',
      coins: state.coins,
      sort: (a: Coin, b: Coin) => a.profit_loss - b.profit_loss
    }
  ]

  if (state.coins.length)
    return (
      <Flex justifyContent='center' as='main' mb={12}>
        <CoinContainer data={data} />
      </Flex>
    )

  return (
    <Flex as='main' mb={12} px={4} justifyContent='center'>
      <VStack spacing='20px' w='2xl'>
        <HStack spacing={4} width='100%'>
          <SkeletonCircle size='8' />
          <Skeleton h='24px' flex='2' />
          <Skeleton h='24px' flex='1' />
          <Skeleton h='24px' flex='1' />
        </HStack>
        <HStack spacing={4} width='100%'>
          <SkeletonCircle size='8' />
          <Skeleton h='24px' flex='2' />
          <Skeleton h='24px' flex='1' />
          <Skeleton h='24px' flex='1' />
        </HStack>
        <HStack spacing={4} width='100%'>
          <SkeletonCircle size='8' />
          <Skeleton h='24px' flex='2' />
          <Skeleton h='24px' flex='1' />
          <Skeleton h='24px' flex='1' />
        </HStack>
      </VStack>
    </Flex>
  )
}
