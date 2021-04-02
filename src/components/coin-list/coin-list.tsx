import React from "react"
import * as S from "./styled-coin-list"
import { Coin, CoinItem, Loader } from "../"
import { ICoinState } from "../../pages"
import FadeIn from "../fade-in/fade-in"

function descendingOrder(coinArr: Coin[]) {
  return coinArr.sort((a, b) => b.profit_loss - a.profit_loss)
}

const CoinList = ({ coinState }: { coinState: ICoinState }) => {
  switch (coinState.result) {
    case "loading":
      return <Loader />

    case "empty":
      return <S.Validation>No coins to show</S.Validation>

    case "past":
      return (
        <S.Validation>
          Bitcoin was created on January 9th, 2009. The earliest pricing
          available is from October 5th, 2009 when a single Bitcoin cost
          $0.000764.
        </S.Validation>
      )

    case "future":
      return (
        <FadeIn>
          <S.Validation>
            Shucks, can't predict the future. <span role="img">😢</span>
          </S.Validation>
        </FadeIn>
      )

    case "error":
      return (
        <FadeIn>
          <S.Validation>
            Something went wrong. <span role="img">🧐</span> Try again.
          </S.Validation>
        </FadeIn>
      )

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
