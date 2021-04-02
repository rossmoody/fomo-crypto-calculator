import React from "react"
import * as S from "./styled-coin-list"
import { Coin, CoinItem, Loader } from "../"
import { ICoinState } from "../../pages"

function descendingOrder(coinArr: Coin[]) {
  return coinArr.sort((a, b) => b.profit_loss - a.profit_loss)
}

const CoinList = ({ coinState }: { coinState: ICoinState }) => {
  switch (coinState.result) {
    case "loading":
      return <Loader />

    case "empty":
      return <div>No results</div>

    case "valid":
      return (
        <S.UnorderedList>
          {descendingOrder(coinState.data).map((coin, index) => {
            return <CoinItem key={index} coin={coin} />
          })}
        </S.UnorderedList>
      )

    default:
      return <Loader />
  }
}

export default CoinList
