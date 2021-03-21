import React from "react"
import * as S from "./styled-coin"

const Coin = ({ coin }) => {
  console.log(coin)
  return (
    <S.Coin>
      <S.Image>
        <img src={coin.image} />
      </S.Image>
      <S.Title>
        <span>{coin.name}</span>
        <S.CoinsOwned>
          {coin.symbol} {coin.coins_owned}
        </S.CoinsOwned>
      </S.Title>
      <S.Profit>
        <span>${coin.profit_loss}</span>
        <span>+{coin.roi}%</span>
      </S.Profit>
    </S.Coin>
  )
}

export default Coin
