import React from 'react'
import * as S from './styled-coin'
import CryptoIcon, { iconNames } from '../icons/crypto-icon'

const keys = Object.keys(iconNames).map(i => i.toLowerCase())

const CoinIcon = props => {
  const { coinUrl, coinId }: { coinUrl: string; coinId: string } = props

  if (keys.includes(coinId)) {
    return (
      <S.ImageContainer>
        <CryptoIcon name={coinId} />
      </S.ImageContainer>
    )
  }

  return (
    <S.ImageContainer>
      <S.Image src={coinUrl} alt={coinUrl} />
    </S.ImageContainer>
  )
}

export default CoinIcon
