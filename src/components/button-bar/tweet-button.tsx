import React from 'react'
import { Button } from '@chakra-ui/react'

import { TwitterIcon } from '../icons'

export const TweetButton = (): JSX.Element => {
  const tweet = {
    text:
      'FOMO: anxiety that an exciting or interesting event may currently be happening elsewhere, often aroused by posts seen on social media.',
    url: document.URL,
    hashtag: 'fomo',
  }

  const url = `https://twitter.com/intent/tweet?url=${tweet.url}&text=${tweet.text}&hashtags=${tweet.hashtag}`

  return (
    <Button
      as="a"
      mx={2}
      my={2}
      leftIcon={<TwitterIcon />}
      colorScheme="brand"
      href={url}
    >
      Tweet the regret
    </Button>
  )
}
