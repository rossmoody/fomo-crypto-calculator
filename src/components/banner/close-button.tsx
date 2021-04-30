import React from 'react'
import { IconButton, IconButtonProps } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

export const CloseButton = (properties: IconButtonProps): JSX.Element => (
  <IconButton
    fontSize=".9em"
    variant="ghost"
    icon={<CloseIcon />}
    alignSelf={{ base: 'self-start', sm: 'initial' }}
    {...properties}
  />
)
