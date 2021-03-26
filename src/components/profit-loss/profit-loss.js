import React from "react"
import Coin from "../coin/coin"
import * as S from "./styled-profit-loss"

const NoResults = () => {
  return (
    <S.Section>
      <S.Container>No results</S.Container>
    </S.Section>
  )
}

const Loader = () => {
  return (
    <S.Section>
      <S.Container>
        <S.Loader type="Bars" />
      </S.Container>
    </S.Section>
  )
}

const ProfitLoss = ({ coins }) => {
  if (!coins) return <Loader />
  if (coins.length === 0) return <NoResults />

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
