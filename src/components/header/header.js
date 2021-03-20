import React from "react"
import Logo from "../logo/logo"
import * as S from "./styled-header"

const Header = () => {
  return (
    <S.Heading>
      <S.Logo>
        <Logo />
      </S.Logo>
    </S.Heading>
  )
}

export default Header
