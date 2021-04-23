import React from 'react'
import { Button } from '@chakra-ui/react'
import { TwitterIcon } from '../icons'

export const TweetButton = (): JSX.Element => {
  const tweet = {
    text: 'Check out how rich I could have been...',
    url: document.URL,
    hashtag: 'fomocryptocalculator'
  }

  const url = `https://twitter.com/intent/tweet?url=${tweet.url}&text=${tweet.text}&hashtags=${tweet.hashtag}`

  return (
    <Button
      as='a'
      mx={2}
      my={2}
      leftIcon={<TwitterIcon />}
      colorScheme='twitter'
      href={url}
    >
      Tweet the regret
    </Button>
  )
}
