import React from "react"
import * as S from "./styled-hero"
import { handle } from "./event-handlers"

interface IHero {
  setDate: (arg0: string) => void
  setInvestment: (arg0: number) => void
}

const Hero = ({ setDate, setInvestment }: IHero) => {
  console.log("rendered Hero component")

  return (
    <S.Hero>
      <S.HeroInner>
        <S.Headline>
          If I invested
          <S.MoneySpan id="fiat">
            <S.MoneyInput
              onChange={event => {
                handle.investment(+event.target.value, setInvestment)
              }}
              type="number"
              defaultValue={100}
            />
          </S.MoneySpan>
          into one cryptocurrency on
          <S.DateSpan>
            <S.DateInput
              type="date"
              defaultValue="2016-06-01"
              id="date"
              onChange={event => handle.date(event.target.value, setDate)}
            />
          </S.DateSpan>
          today it would be worth...
        </S.Headline>
      </S.HeroInner>
    </S.Hero>
  )
}

export default React.memo(Hero)
