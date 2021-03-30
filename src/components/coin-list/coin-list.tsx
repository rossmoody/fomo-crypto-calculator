import React from "react"
import ICoin from "../../api/process-coins"
import Coin from "../coin/coin"
import Loader from "../loader/loader"
import FadeIn from "../fade-in/fade-in"
import * as S from "./styled-coin-list"

interface IProfitLoss {
  coins: Array<ICoin> | boolean
}

const CoinList = ({ coins }: IProfitLoss) => {
  console.log(coins, "CoinList")
  if (!coins) return <Loader />
  if (Array.isArray(coins) && coins.length === 0) return <p>No results</p>

  return (
    <S.UnorderedList>
      <FadeIn>
        {Array.isArray(coins) &&
          coins.map((coin, index) => {
            return <Coin key={index} coin={coin} />
          })}
      </FadeIn>
    </S.UnorderedList>
  )
}

export default CoinList
