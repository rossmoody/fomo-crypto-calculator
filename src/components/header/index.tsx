import React from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Grid,
  GridItem,
  Divider,
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
          <Logo />
        </GridItem>
        <GridItem display='flex' alignItems='center' justifyContent='flex-end'>
          <IconButton
            variant='ghost'
            aria-label='Search database'
            icon={colorMode == 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </GridItem>
      </Grid>
      <Divider />
    </Box>
  )
}
