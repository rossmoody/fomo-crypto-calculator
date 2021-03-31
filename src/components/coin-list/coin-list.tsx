import React from "react"
import ICoin from "../../api/process-coins"
import Coin from "../coin/coin"
import Loader from "../loader/loader"
import * as S from "./styled-coin-list"

interface IProfitLoss {
  coins: Array<ICoin> | boolean
}

const CoinList = ({ coins }: IProfitLoss) => {
  if (!coins) return <Loader />
  if (Array.isArray(coins) && coins.length === 0) return <p>No results</p>

  return (
    <S.UnorderedList>
      {Array.isArray(coins) &&
        coins.map((coin, index) => {
          return <Coin key={index} coin={coin} />
        })}
    </S.UnorderedList>
  )
}

export default CoinList
