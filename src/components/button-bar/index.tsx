import React from 'react'
import { Center, Button, SlideFade } from '@chakra-ui/react'

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
    <Center width='100%' minh='90px' position='relative'>
      <Center>
        <SlideFade
          in={showButton}
          offsetY='-50px'
          style={{
            transitionDuration: '400ms'
          }}
        >
          <Button
            size={'lg'}
            colorScheme='brand'
            type='submit'
            isLoading={isSubmitting}
            m={4}
          >
            Calculate FOMO
          </Button>
        </SlideFade>
      </Center>
      <Center pos='absolute'>
        <SlideFade in={showSocial} offsetY='-50px' unmountOnExit>
          <Button>Share the pain</Button>
          <Button>Upvote on ProductHunt</Button>
          <Button>Tweet the regret</Button>
        </SlideFade>
      </Center>
    </Center>
  )
}
