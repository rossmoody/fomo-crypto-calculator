import React from "react"
import * as S from "./styled-coin"
import converter from "number-to-words"
import ReactTooltip from "react-tooltip"
import { InfoIcon } from "../icons"
import { Coin, FadeIn } from ".."

function isPositive(coin: Coin): boolean {
  if (Math.sign(coin.roi) > 0) return true
}

function isHugeNumber(coin: Coin): boolean {
  if (coin.profit_loss.toString().length > 7) return true
}

const CoinItem = ({ coin }: { coin: Coin }) => {
  return (
    <FadeIn duration={600} delay={200}>
      <S.Coin>
        <S.ImageContainer>
          <S.Image src={coin.image} alt={coin.name} />
        </S.ImageContainer>
        <S.CoinName>{coin.name}</S.CoinName>
        <S.CoinsOwned>
          {coin.symbol} {coin.coins_owned.toFixed(3)}
        </S.CoinsOwned>
        <S.ProfitContainer>
          {isHugeNumber(coin) && (
            <>
              <ReactTooltip
                id={coin.id}
                backgroundColor="#192635"
                delayShow={100}
                delayHide={300}
                effect="solid"
                place="top"
                className="react-tooltip"
              >
                {`That's exactly ${converter.toWords(
                  coin.profit_loss
                )} dollars worth of regret.`}
              </ReactTooltip>
              <S.InfoIconContainer data-tip data-for={coin.id}>
                <InfoIcon />
              </S.InfoIconContainer>
            </>
          )}
          <S.Profit isHugeNumber={isHugeNumber(coin)}>
            ${coin.profit_loss.toLocaleString()}
          </S.Profit>
        </S.ProfitContainer>
        <S.RoiContainer>
          <S.Roi positive={isPositive(coin)}>
            {isPositive(coin) && "+"}
            {coin.roi.toLocaleString()}%
          </S.Roi>
        </S.RoiContainer>
      </S.Coin>
    </FadeIn>
  )
}

export default CoinItem
