import React from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Divider,
  HStack,
  IconButton,
  useColorMode
} from '@chakra-ui/react'
import { Logo } from '../'

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box as='nav'>
      <Grid h='88px' templateColumns='repeat(3, 1fr)' px={[2, 4]}>
        <GridItem minW='48px' />
        <GridItem display='flex' alignItems='center' justifyContent='center'>
          <Flex justifyContent='center'>
            <Logo />
          </Flex>
        </GridItem>
        <HStack justifyContent='flex-end' minW='48px'>
          <IconButton
            variant='ghost'
            aria-label='Search database'
            icon={colorMode == 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </HStack>
      </Grid>
      <Divider />
    </Box>
  )
}
