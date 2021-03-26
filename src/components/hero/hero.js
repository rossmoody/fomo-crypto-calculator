import React from "react"
import * as S from "./styled-hero"

let timer
let today = new Date()

function handleDate(date, callback) {
  clearTimeout(timer)
  const splitDate = date.split("-")
  const [year, month, day] = splitDate
  if (!year || !day || !month) {
    console.log("Fill out date")
    return
  }
  if (parseInt(year, 10) > today.getFullYear()) {
    console.log("We cant predict the future") // This needs improved
    return
  }
  if (parseInt(year, 10) < 2009) {
    console.log("Bitcoin, the first cryptocurrency was create January 3, 2009.")
    return
  }

  const newDate = `${day}-${month}-${year}`

  timer = setTimeout(() => {
    callback(newDate)
  }, 700)
}

function handleInvestment(money, callback) {
  clearTimeout(timer)
  const fiat = document.querySelector("#fiat")
  fiat.style.width = (fiat.value.length + 1) * 18 + "px"

  const value = parseInt(money, 10)
  if (value < 1 || !value) return

  timer = setTimeout(() => {
    callback(money)
  }, 700)
}

const Hero = ({ date, investment }) => {
  return (
    <S.Hero>
      <S.HeroInner>
        <S.Headline>
          If I invested
          <S.PseudoInput fiat>
            <S.Input
              onChange={e => {
                handleInvestment(e.target.value, investment)
              }}
              type="number"
              id="fiat"
              defaultValue={100}
              fiat
            />
          </S.PseudoInput>
          into one cryptocurrency on
          <S.PseudoInput>
            <S.Input
              type="date"
              defaultValue="2017-06-01"
              id="date"
              onChange={e => handleDate(e.target.value, date)}
            />
          </S.PseudoInput>
          today it would be worth...
        </S.Headline>
      </S.HeroInner>
    </S.Hero>
  )
}

export default Hero
