import React from "react"
import { FadeIn } from "../"
import Coin from "../coin/coin"
import * as S from "./styled-profit-loss"

const ProfitLossContainer = ({ children }) => {
  return (
    <FadeIn>
      <S.Section>
        <S.Container>{children}</S.Container>
      </S.Section>
    </FadeIn>
  )
}

const NoResults = () => {
  return <ProfitLossContainer>No results</ProfitLossContainer>
}

const Loader = () => {
  return (
    <ProfitLossContainer>
      <S.Loader type="Bars" />
    </ProfitLossContainer>
  )
}

const InputError = () => {
  return (
    <ProfitLossContainer>
      <p>There is an error in your date.</p>
    </ProfitLossContainer>
  )
}

const PredictFuture = () => {
  return (
    <ProfitLossContainer>
      <p>
        We can't predict the future. <span role="img">😢</span>
      </p>
    </ProfitLossContainer>
  )
}

const InThePast = () => {
  return (
    <ProfitLossContainer>
      <p>
        Bitcoin was created on January 3, 2009. The earliest pricing data we
        have is October 10th, 2009.
      </p>
    </ProfitLossContainer>
  )
}

const ProfitLoss = ({ coins }) => {
  if (!coins) return <Loader />
  if (coins.length === 0) return <NoResults />
  if (coins === "error") return <InputError />
  if (coins === "future") return <PredictFuture />
  if (coins === "past") return <InThePast />

  return (
    <ProfitLossContainer>
      <S.UnorderedList>
        {coins.map((coin, index) => {
          return <Coin key={index} coin={coin} />
        })}
      </S.UnorderedList>
    </ProfitLossContainer>
  )
}

export default ProfitLoss
