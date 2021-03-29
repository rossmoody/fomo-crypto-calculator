import React from "react"
import * as S from "./styled-hero"

let timer

function handleDate(date, callback) {
  clearTimeout(timer)
  const splitDate = date.split("-")
  const [year, month, day] = splitDate
  const newDate = `${day}-${month}-${year}`
  const currentYear = new Date().getFullYear()

  timer = setTimeout(() => {
    if (!year || !day || !month) {
      callback({ response: "error" })
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

function handleInvestment(money, callback) {
  clearTimeout(timer)

  const inputSpan = document.querySelector("#fiat")
  inputSpan.style.width = (money.length + 2) * 24 + "px"

  const value = parseInt(money, 10)
  if (value < 1 || isNaN(value)) return

  timer = setTimeout(() => {
    callback(money)
  }, 700)
}

const Hero = ({ setDate, setInvestment }) => {
  console.log("rendered Hero component")
  return (
    <S.Hero>
      <S.HeroInner>
        <S.Headline>
          If I invested
          <S.MoneySpan id="fiat">
            <S.MoneyInput
              onChange={event => {
                handleInvestment(event.target.value, setInvestment)
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
