import React from 'react'
import { Coin, CoinIcon } from '../'
import converter from 'number-to-words'
import { InfoIcon } from '@chakra-ui/icons'
import {
  Box,
  Grid,
  GridItem,
  Text,
  Tooltip,
  useColorModeValue
} from '@chakra-ui/react'

export const CoinItem = ({ coin }: { coin: Coin }) => {
  const isPositive: boolean = Math.sign(coin.roi) > 0
  const isHugeNumber = coin.profit_loss.toString().length > 7

  return (
    <Grid
      w='100%'
      templateRows={['repeat(2, 1fr)', 'repeat(1, 1fr)']}
      templateColumns={['32px 2fr 3fr', '32px 2fr 3fr 2fr']}
      columnGap={[2, 3]}
      px={6}
    >
      <GridItem rowSpan={[2, 1]}>
        <CoinIcon coin={coin} />
      </GridItem>
      <GridItem rowSpan={[2, 1]}>
        <Box>
          <Text fontWeight='500' fontSize='lg' lineHeight='24px'>
            {coin.name}
          </Text>
        </Box>
        <Box>
          <Text
            fontSize='md'
            lineHeight='20px'
            color={useColorModeValue('gray.500', 'gray.300')}
            casing='uppercase'
          >
            {coin.symbol} {coin.coins_owned.toFixed(3)}
          </Text>
        </Box>
      </GridItem>
      <GridItem
        colSpan={1}
        fontWeight='500'
        fontSize='lg'
        lineHeight='18px'
        display='flex'
        justifyContent='flex-end'
        alignItems='center'
      >
        {isHugeNumber && (
          <Tooltip
            p={4}
            borderRadius={8}
            label={`That's exactly ${converter.toWords(
              coin.profit_loss
            )} dollars worth of regret.`}
            hasArrow
            placement='top'
          >
            <InfoIcon
              color='gray.400'
              _hover={{ color: 'brand.400', cursor: 'pointer' }}
            />
          </Tooltip>
        )}
        <Text ml={1}>${coin.profit_loss.toLocaleString()}</Text>
      </GridItem>
      <GridItem
        isTruncated
        colSpan={1}
        display='flex'
        justifyContent='flex-end'
        alignItems={['start', 'center']}
      >
        <Text
          fontSize={['md', 'lg']}
          fontWeight={[400, 500]}
          color={isPositive ? 'green.400' : 'red.400'}
        >
          {isPositive && '+'}
          {coin.roi.toLocaleString()}%
        </Text>
      </GridItem>
    </Grid>
  )
}
