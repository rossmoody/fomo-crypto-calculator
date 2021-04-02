import styled from "styled-components"

const Coin = styled.li`
  font-size: 18px;
  font-weight: 500;
  word-break: break-word;
  border-top: 1px solid ${props => props.theme.divider};
  display: grid;
  grid-template:
    "image coin-name profit roi"
    "image coins-owned profit roi";
  grid-template-columns: 32px 1fr;
  grid-column-gap: 12px;
  align-items: center;
  padding: 24px;

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template:
      "image coin-name coin-name profit profit"
      "image coins-owned coins-owned roi roi";
    grid-template-columns: 32px 1fr;
  }
`

const ImageContainer = styled.div`
  grid-area: image;
`

const Image = styled.img`
  height: 32px;
  width: 32px;
`

const CoinName = styled.span`
  grid-area: coin-name;
`

const CoinsOwned = styled.span`
  grid-area: coins-owned;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 15px;
  color: ${props => props.theme.subdued};
`

const Profit = styled.span`
  grid-area: profit;
  width: 140px;
  text-align: end;

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    width: 160px;
  }
`

interface RoiProps {
  positive: boolean
}

const Roi = styled.span<RoiProps>`
  grid-area: roi;
  width: 140px;
  text-align: end;
  color: ${props =>
    props.positive ? props.theme.positive : props.theme.negative};

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    font-size: 15px;
    width: 160px;
  }
`

export { Coin, CoinName, CoinsOwned, Image, ImageContainer, Profit, Roi }
