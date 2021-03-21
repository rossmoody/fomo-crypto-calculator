import React from "react"
import * as S from "./styled-coin"

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
        <S.Roi>+{coin.roi.toLocaleString()}%</S.Roi>
      </S.Profit>
    </S.Coin>
  )
}

export default Coin
