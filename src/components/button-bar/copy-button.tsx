import React from 'react'
import { Button, useClipboard, useToast } from '@chakra-ui/react'
import { CopyIcon } from '../icons'

export const CopyButton = (): JSX.Element => {
  const { onCopy } = useClipboard(document.URL)

  const toast = useToast()

  const handleClick = () => {
    onCopy()
    toast({
      title: 'URL copied to clipboard',
      description: 'Go forth and share the fomo...'
    })
  }

  return (
    <Button mx={2} my={2} leftIcon={<CopyIcon />} onClick={handleClick}>
      Copy link to result
    </Button>
  )
}
