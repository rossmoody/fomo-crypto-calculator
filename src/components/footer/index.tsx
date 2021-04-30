import React from 'react'
import {
  Divider,
  Center,
  Link,
  VStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

export const Footer = (): JSX.Element => {
  const color = useColorModeValue('brand.500', 'brand.300')

  return (
    <Center as="footer" flexDir="column" mb={8} mt={12}>
      <Divider />
      <VStack
        maxW="xl"
        textAlign="center"
        justifyContent="center"
        py={8}
        px={4}
      >
        <Text fontSize={12} color="gray.500">
          Made by{' '}
          <Link href="https://www.twitter.com/_rossmoody" color={color}>
            Ross Moody
          </Link>{' '}
          for fun in 2021. Help improve this site with{' '}
          <Link
            href="https://github.com/rossmoody/fomo-crypto-calculator/issues/new/choose"
            color={color}
          >
            your ideas on GitHub.
          </Link>{' '}
          Cryptocurrency information is based on daily closing prices from{' '}
          <Link href="https://www.coingecko.com/en/api" color={color}>
            CoinGecko
          </Link>
          . Made using the incredible component library from{' '}
          <Link href="https://chakra-ui.com/" color={color}>
            Chakra UI
          </Link>{' '}
          .
        </Text>
      </VStack>
    </Center>
  )
}
