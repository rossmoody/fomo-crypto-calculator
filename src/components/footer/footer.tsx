import React from "react"
import * as S from "./styled-footer"

const Footer = () => {
  return (
    <S.Footer>
      <S.Item>
        <span role="img" aria-label="Announcement">
          📣
        </span>{" "}
        Help improve this site with{" "}
        <a href="https://github.com/rossmoody/fomo-crypto-calculator">
          your ideas on GitHub.{" "}
        </a>
      </S.Item>
      <S.Item>
        Made by <a href="https://www.twitter.com/_rossmoody">Ross Moody</a> for
        fun in 2021
      </S.Item>
    </S.Footer>
  )
}

export default Footer
