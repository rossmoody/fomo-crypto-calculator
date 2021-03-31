import React from "react"
import * as S from "./styled-profit-loss"
import { CoinList } from "../"

const ProfitLoss = ({ coins }) => {
  return (
    <S.Section>
      <S.Container>
        <CoinList coins={coins} />
      </S.Container>
    </S.Section>
  )
}

export default ProfitLoss
