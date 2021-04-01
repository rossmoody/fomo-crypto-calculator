import React from "react"
import * as S from "./styled-hero"

let timer: ReturnType<typeof setTimeout>

function handleDate(date: string, callback: (arg0: string) => void) {
  clearTimeout(timer)
  const splitDate = date.split("-")
  const [year, month, day] = splitDate
  const newDate = `${day}-${month}-${year}`
  // const currentYear = new Date().getFullYear()

  timer = setTimeout(() => {
    callback(newDate)
  }, 700)
}

function handleInvestment(money: number, callback: (arg0: number) => void) {
  clearTimeout(timer)

  const inputSpan: HTMLSpanElement = document.querySelector("#fiat")
  inputSpan.style.width = (money.toString().length + 2) * 24 + "px"

  if (money < 1 || isNaN(money)) return

  timer = setTimeout(() => {
    callback(money)
  }, 700)
}

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
                handleInvestment(+event.target.value, setInvestment)
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
              onChange={event => handleDate(event.target.value, setDate)}
            />
          </S.DateSpan>
          today it would be worth...
        </S.Headline>
      </S.HeroInner>
    </S.Hero>
  )
}

export default React.memo(Hero)
