import React from "react"
import * as S from "./styled-hero"

let timer: ReturnType<typeof setTimeout>

function handleDate(date: string, callback: Function) {
  clearTimeout(timer)
  const splitDate = date.split("-")
  const [year, month, day] = splitDate
  const newDate = `${day}-${month}-${year}`
  const currentYear = new Date().getFullYear()

  timer = setTimeout(() => {
    if (!year || !day || !month) {
      callback("error")
      return
    }

    if (parseInt(year, 10) > currentYear) {
      callback({ response: "future" })
      return
    }

    if (parseInt(year, 10) < 2009) {
      callback({ response: "past" })
      return
    }

    callback(newDate)
  }, 700)
}

function handleInvestment(money: number, callback: Function) {
  clearTimeout(timer)

  const inputSpan: HTMLSpanElement | null = document.querySelector("#fiat")
  if (inputSpan)
    inputSpan.style.width = (money.toString().length + 2) * 24 + "px"

  if (money < 1 || isNaN(money)) return

  timer = setTimeout(() => {
    callback(money)
  }, 700)
}

interface IHero {
  setDate: Function
  setInvestment: Function
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

export default Hero
