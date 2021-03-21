import React from "react"
import * as S from "./styled-hero"

function resizeInputWidth() {
  const fiat = document.querySelector("#fiat")
  fiat.style.width = (fiat.value.length + 1) * 18 + "px"
}

const Hero = ({ date, investment }) => {
  return (
    <S.Hero>
      <S.HeroInner>
        <S.Headline>
          If I invested
          <S.PseudoInput fiat>
            <S.Input
              onKeyUp={e => {
                resizeInputWidth()
                investment(e.target.value)
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
              defaultValue="2017-10-18" // need dd-mm-yyyy
              type="date"
              id="date"
              size={6}
              min="2009-09-01" // Bitcoin release day
              onKeyUp={e => date(e.target.value)}
            />
          </S.PseudoInput>
          today it would be worth...
        </S.Headline>
      </S.HeroInner>
    </S.Hero>
  )
}

export default Hero