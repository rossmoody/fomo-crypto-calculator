import React from 'react'
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useBreakpointValue,
} from '@chakra-ui/react'

import { Data, CoinPanel } from './coin-panel'

export const TabContainer = ({ data }: { data: Data[] }): JSX.Element => {
  const size = useBreakpointValue({ base: 'sm', md: 'md' })

  return (
    <Tabs
      variant="soft-rounded"
      colorScheme="brand"
      defaultIndex={1}
      w="2xl"
      isLazy
      size={size}
    >
      <TabList px={4}>
        {data.map((tab) => (
          <Tab key={tab.label}>{tab.label}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {data.map((object, index) => (
          <TabPanel key={index} px={0} py={8}>
            <CoinPanel data={object} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}
