import React, { useState } from 'react'
import { Box, Collapse, HStack, Stack, Text } from '@chakra-ui/react'
import { CallToActionLink } from './call-to-action'
import { CloseButton } from './close-button'

export const Banner = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <Collapse in={isOpen} animateOpacity>
      <Box as='section'>
        <Box
          bgGradient='linear(to-r, blue.500, purple.500)'
          color='white'
          py='2'
          px={{ base: '3', md: '6', lg: '8' }}
        >
          <HStack spacing='3'>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              justifyContent='center'
              alignItems='center'
              spacing={{ base: '3', md: '6' }}
              width='full'
            >
              <Text>
                <b>Did you buy a license yet? </b>
                Lorem ipsum dolor sit amet.
              </Text>
              <CallToActionLink>Check it out</CallToActionLink>
            </Stack>
            <CloseButton
              aria-label='Close banner'
              onClick={() => setIsOpen(false)}
            />
          </HStack>
        </Box>
      </Box>
    </Collapse>
  )
}
