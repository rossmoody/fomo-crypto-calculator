import React from "react"
import Coin from "../coin/coin"
import * as S from "./styled-profit-loss"

const ProfitLoss = ({ coins }) => {
  if (!coins) return <div>Loader</div>

  return (
    <S.Section>
      <S.Container>
        <S.UnorderedList>
          {coins.map((coin, index) => {
            return <Coin key={index} coin={coin} />
          })}
        </S.UnorderedList>
      </S.Container>
    </S.Section>
  )
}

export default ProfitLoss
