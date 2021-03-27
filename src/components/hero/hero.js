import React from "react"
import * as S from "./styled-hero"

let handleTimer
const today = new Date()

function handleDate(date, callback) {
  clearTimeout(handleTimer)
  const splitDate = date.split("-")
  const [year, month, day] = splitDate
  const newDate = `${day}-${month}-${year}`

  handleTimer = setTimeout(() => {
    if (!year || !day || !month) {
      callback({ response: "error" })
      return
    }

    if (parseInt(year, 10) > today.getFullYear()) {
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

function handleInvestment(ele, callback) {
  clearTimeout(handleTimer)

  const input = ele.target
  input.style.width = (input.value.length + 1) * 18 + "px"

  const value = parseInt(input.value, 10)
  if (value < 1 || NaN) return

  handleTimer = setTimeout(() => {
    callback(input.value)
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
              onChange={event => {
                handleInvestment(event, investment)
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
              defaultValue="2012-06-01"
              id="date"
              onChange={event => handleDate(event.target.value, date)}
            />
          </S.PseudoInput>
          today it would be worth...
        </S.Headline>
      </S.HeroInner>
    </S.Hero>
  )
}

export default Hero
