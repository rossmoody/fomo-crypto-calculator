import React from "react"
import * as S from "./styled-hero"

function resizeInputWidth() {
  const fiat = document.querySelector("#fiat")
  fiat.style.width = (fiat.value.length + 1) * 18 + "px"
}

const Hero = () => {
  return (
    <S.Hero>
      <S.HeroInner>
        <S.Headline>
          If I invested
          <S.PseudoInput fiat>
            <S.Input
              onKeyUp={resizeInputWidth}
              type="number"
              id="fiat"
              defaultValue={100}
              fiat
            />
          </S.PseudoInput>
          into cryptocurrency on
          <S.PseudoInput>
            <S.Input defaultValue="2017-10-10" type="date" id="date" size={6} />
          </S.PseudoInput>
          today it would be worth...
        </S.Headline>
      </S.HeroInner>
    </S.Hero>
  )
}

export default Hero
