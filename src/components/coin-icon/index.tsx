import React from 'react'
import { Coin, cryptoIcons } from '../'
import { Icon, Image } from '@chakra-ui/react'
import Placeholder from './placeholder.png'

export const CoinIcon = ({
  coin,
  size = '32px'
}: {
  coin: Coin
  size?: string
}) => {
  if (Object.keys(cryptoIcons).includes(coin.id)) {
    return (
      <Icon boxSize={size}>
        {cryptoIcons[coin.id].map((icon: JSX.Element, index: number) =>
          React.cloneElement(icon, { key: index })
        )}
      </Icon>
    )
  }

  // console.log(coin.id)
  return (
    <Image
      src={coin.image}
      alt={coin.name}
      boxSize={size}
      fallbackSrc={Placeholder}
    />
  )
}
