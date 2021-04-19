import React from 'react'
import {
  Center,
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
  slice: any
  filter: any
}

const CoinPanel = ({ data }: { data: Data }) => {
  const coinArr = data.coins
    .filter((a) => a.past_price)
    .filter(data.filter)
    .slice(0, data.slice)
    .sort(data.sort)

  if (coinArr.length) {
    return (
      <SlideFade offsetY='20px' in={true} style={{ width: '100%' }}>
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

const TabContainer = ({ data }: { data: Data[] }) => {
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
            <CoinPanel data={obj} />
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
      label: 'All coins',
      coins: state.coins,
      sort: (a: Coin, b: Coin) => {
        if (a.name < b.name) return -1
      },
      slice: state.coins.length,
      filter: (coin: Coin) => coin.roi
    },
    {
      label: 'Top gains',
      coins: state.coins,
      sort: (a: Coin, b: Coin) => b.profit_loss - a.profit_loss,
      slice: 25,
      filter: (coin: Coin) => coin.roi > 0
    },
    {
      label: 'Top losses',
      coins: state.coins,
      sort: (a: Coin, b: Coin) => a.profit_loss - b.profit_loss,
      slice: 25,
      filter: (coin: Coin) => coin.roi <= 0
    }
  ]

  if (state.coins.length)
    return (
      <Flex justifyContent='center' as='main' mb={12}>
        <TabContainer data={data} />
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
