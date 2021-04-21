import React from 'react'
import { Center, Button, SlideFade, Flex } from '@chakra-ui/react'
import { CopyIcon, ProductHuntIcon, TwitterIcon } from '../icons'

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
            <Button mx={1} my={2} variant='ghost' leftIcon={<TwitterIcon />}>
              Tweet the pain
            </Button>
            <Button
              mx={1}
              my={2}
              variant='ghost'
              leftIcon={<ProductHuntIcon />}
            >
              Upvote on ProductHunt
            </Button>
            <Button mx={1} my={2} variant='ghost' leftIcon={<CopyIcon />}>
              Copy link to result
            </Button>
          </Flex>
        </SlideFade>
      </Flex>
    </Center>
  )
}
