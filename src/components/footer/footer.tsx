import React from "react"
import * as S from "./styled-footer"

const Footer = () => {
  return (
    <S.Footer>
      <S.Item>
        Made by <a href="https://www.twitter.com/_rossmoody">Ross Moody</a> for
        fun in 2021.{" "}
        <span role="img" aria-label="Announcement">
          📣
        </span>{" "}
        Help improve this site with{" "}
        <a href="https://github.com/rossmoody/fomo-crypto-calculator">
          your ideas on GitHub.{" "}
        </a>
      </S.Item>
      <S.Item></S.Item>
      <S.Item>
        Cryptocurrency information is based on daily closing prices on{" "}
        <a href="https://www.coingecko.com/en/api">CoinGecko</a>.
      </S.Item>
    </S.Footer>
  )
}

export default Footer
