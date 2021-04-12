import React from "react"
import * as S from "./styled-profit-loss"
import { CoinList, Graveyard } from "../"
import { ICoinState } from "../home/home"

const ProfitLoss = ({ coinState }: { coinState: ICoinState }) => {
  return (
    <S.Section>
      <S.Container>
        <CoinList coinState={coinState} />
        <Graveyard coinState={coinState} />
      </S.Container>
    </S.Section>
  )
}

export default ProfitLoss
