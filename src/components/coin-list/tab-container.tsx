import React from 'react'
import { Data } from './coin-panel'
import { CoinPanel } from './coin-panel'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'

export const TabContainer = ({ data }: { data: Data[] }) => {
  return (
    <Tabs
      variant='soft-rounded'
      colorScheme='brand'
      defaultIndex={1}
      w='2xl'
      isLazy
      size='sm'
    >
      <TabList px={4}>
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
