import React from 'react'
import { Center, Button, SlideFade, Flex } from '@chakra-ui/react'
import { CopyButton } from './copy-button'
import { TweetButton } from './tweet-button'

export const ButtonBar = ({
  isSubmitting,
  showButton,
  showSocial
}: {
  isSubmitting: boolean
  showButton: boolean
  showSocial: boolean
}): JSX.Element => {
  return (
    <Center width='100%' minH='100px' py={4}>
      <Flex>
        <SlideFade in={showButton} offsetY='-50px' unmountOnExit>
          <Button
            size={'lg'}
            colorScheme='brand'
            type='submit'
            isLoading={isSubmitting}
          >
            Calculate FOMO
          </Button>
        </SlideFade>
      </Flex>
      <Flex>
        <SlideFade in={showSocial} offsetY='-50px' unmountOnExit>
          <Flex wrap='wrap' justifyContent='center'>
            <TweetButton />
            <CopyButton />
          </Flex>
        </SlideFade>
      </Flex>
    </Center>
  )
}
