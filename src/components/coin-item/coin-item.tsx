import React from "react"
import * as S from "./styled-coin"
import { Coin, FadeIn } from ".."

function isPositive(coin: Coin): boolean {
  if (Math.sign(coin.roi) > 0) return true
}

const CoinItem = ({ coin }: { coin: Coin }) => {
  return (
    <FadeIn duration={600} delay={200}>
      <S.Coin>
        <S.ImageContainer>
          <S.Image src={coin.image} alt={coin.name} />
        </S.ImageContainer>
        <S.CoinName>{coin.name}</S.CoinName>
        <S.CoinsOwned>
          {coin.symbol} {coin.coins_owned.toFixed(3)}
        </S.CoinsOwned>
        <S.Profit>${coin.profit_loss.toLocaleString()}</S.Profit>
        <S.Roi positive={isPositive(coin)}>
          {isPositive(coin) && "+"}
          {coin.roi.toLocaleString()}%
        </S.Roi>
      </S.Coin>
    </FadeIn>
  )
}

export default CoinItem
