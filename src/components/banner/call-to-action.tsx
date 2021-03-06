import { Box, BoxProps } from '@chakra-ui/react'
import React from 'react'

export const CallToActionLink = (properties: BoxProps): JSX.Element => (
  <Box
    as="a"
    href="#"
    py="1"
    px="4"
    bg="white"
    color="blue.600"
    fontWeight="semibold"
    rounded="base"
    whiteSpace="nowrap"
    textAlign="center"
    width={{ base: 'full', sm: 'auto' }}
    {...properties}
  />
)
