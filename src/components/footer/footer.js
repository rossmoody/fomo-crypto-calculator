import React from "react"
import * as S from "./styled-footer"

const Footer = () => {
  return (
    <S.Footer>
      <S.Item>
        📣 Help improve this site with <a href="#">your ideas on GitHub. </a>
      </S.Item>
      <S.Item>
        © Made by <a href="#">Ross Moody</a> for fun in 2021
      </S.Item>
    </S.Footer>
  )
}

export default Footer
