import React from "react"
import * as S from "./styled-profit-loss"
import { CoinList } from "../"

const coinsOrErrors = (coins, date) => {
  switch (date) {
    case "error":
      return <div>Error</div>

    default:
      return <CoinList coins={coins} />
  }
}

const ProfitLoss = ({ coins, date }) => {
  return (
    <S.Section>
      <S.Container>{coinsOrErrors(coins, date)}</S.Container>
    </S.Section>
  )
}

export default ProfitLoss
