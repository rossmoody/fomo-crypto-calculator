import React from "react"
import * as S from "./styled-profit-loss"
import { CoinList } from "../"

function descendingOrder(i) {
  return i.sort((a, b) => b.profit_loss - a.profit_loss)
}

const ProfitLoss = ({ coins }) => {
  return (
    <S.Section>
      <S.Container>
        <CoinList coins={descendingOrder(coins)} />
      </S.Container>
    </S.Section>
  )
}

export default ProfitLoss
