import React from "react"
import * as S from "./styled-coin-list"
import ICoin from "../../api/process-coins"
import { Coin } from "../"

interface IProfitLoss {
  coins: ICoin[]
}

const CoinList = ({ coins }: IProfitLoss) => {
  const coinMap = coins => {
    return coins.map((coin, index) => {
      return <Coin key={index} coin={coin} />
    })
  }

  return <S.UnorderedList>{coinMap(coins)}</S.UnorderedList>
}

export default CoinList
