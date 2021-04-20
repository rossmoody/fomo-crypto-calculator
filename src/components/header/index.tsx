import React from 'react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
  Box,
  Center,
  Divider,
  IconButton,
  useColorMode,
  useMediaQuery
} from '@chakra-ui/react'
import { Logo, StackedLogo } from '../'

export const Header = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode()

  const [isSmallScreen] = useMediaQuery('(max-width: 480px)')

  return (
    <Box as='nav'>
      <Center py='24px' pos='relative'>
        {isSmallScreen ? (
          <Box width='124px' height='48px'>
            <StackedLogo />
          </Box>
        ) : (
          <Box width='280px' height='29px'>
            <Logo />
          </Box>
        )}
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
