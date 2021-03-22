import React from "react"
import * as S from "./styled-coin"

function isPositive(coin) {
  if (Math.sign(coin.roi) > 0) return true
}

const Coin = ({ coin }) => {
  return (
    <S.Coin>
      <S.ImageContainer>
        <S.Image src={coin.image} alt={coin.name} />
      </S.ImageContainer>
      <S.Title>
        <span>{coin.name}</span>
        <S.CoinsOwned>
          {coin.symbol} {coin.coins_owned}
        </S.CoinsOwned>
      </S.Title>
      <S.Profit>
        <span>${coin.profit_loss.toLocaleString()}</span>
        <S.Roi positive={isPositive(coin)}>
          {isPositive(coin) && "+"}
          {coin.roi.toLocaleString()}%
        </S.Roi>
      </S.Profit>
    </S.Coin>
  )
}

export default Coin
