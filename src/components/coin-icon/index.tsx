import React from 'react'
import { Icon, Image } from '@chakra-ui/react'

import { Coin } from '../coin'
import { cryptoIcons } from '../crypto-icons'

import Placeholder from './placeholder.png'

export const CoinIcon = ({
  coin,
  size = '32px',
}: {
  coin: Coin
  size?: string
}): JSX.Element => {
  if (Object.keys(cryptoIcons).includes(coin.id)) {
    return (
      <Icon boxSize={size}>
        {cryptoIcons[coin.id].map((icon: JSX.Element, index: number) =>
          React.cloneElement(icon, { key: index })
        )}
      </Icon>
    )
  }

  return (
    <Image
      src={coin.image}
      alt={coin.name}
      boxSize={size}
      pointerEvents="none"
      fallbackSrc={Placeholder}
    />
  )
}
