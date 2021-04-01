import React from "react"
import * as S from "./styled-coin-list"
import { Coin, CoinItem, Loader } from "../"
import { ICoinState } from "../../pages/index"

function descendingOrder(coinArr: Coin[]) {
  return coinArr.sort((a, b) => b.profit_loss - a.profit_loss)
}

const CoinList = ({ coinState }: { coinState: ICoinState }) => {
  console.log(coinState, "CoinList")

  if (coinState.loading) return <Loader />
  if (!coinState.data.length) return <div>No results</div>

  return (
    <S.UnorderedList>
      {descendingOrder(coinState.data).map((coin, index) => {
        return <CoinItem key={index} coin={coin} />
      })}
    </S.UnorderedList>
  )
}

export default CoinList
