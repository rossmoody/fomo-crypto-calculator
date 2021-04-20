import React from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Center,
  Divider,
  IconButton,
  useColorMode
} from '@chakra-ui/react'
import { Logo } from '../'

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box as='nav'>
      <Center py='24px' pos='relative'>
        <Box width={['124px', '280px']} height={['40px', '29px']}>
          <Logo />
        </Box>
        <IconButton
          position='absolute'
          my='auto'
          right={[2, 4]}
          variant='ghost'
          aria-label='Search database'
          icon={colorMode == 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        />
      </Center>
      <Divider />
    </Box>
  )
}
