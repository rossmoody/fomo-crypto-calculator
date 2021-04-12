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

const InfoIconContainer = styled.div`
  height: 16px;
  width: 16px;
  color: ${props => props.theme.subdued};

  &:hover {
    color: ${props => props.theme.primary};
    cursor: pointer;
  }
`

const CoinsOwned = styled.span`
  grid-area: coins-owned;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 15px;
  color: ${props => props.theme.subdued};
`

const ProfitContainer = styled.div`
  grid-area: profit;
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    width: 160px;
  }
`

interface ProfitProps {
  isHugeNumber: boolean
}

const Profit = styled.span<ProfitProps>`
  padding: ${props => (props.isHugeNumber ? "4px" : "")};
`

interface RoiProps {
  positive: boolean
}

const RoiContainer = styled.div`
  grid-area: roi;
  width: 130px;
  display: flex;
  justify-content: flex-end;
  text-align: end;

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    font-size: 15px;
    width: 160px;
  }
`

const Roi = styled.span<RoiProps>`
  color: ${props =>
    props.positive ? props.theme.positive : props.theme.negative};
`

export {
  Coin,
  CoinName,
  CoinsOwned,
  Image,
  ImageContainer,
  InfoIconContainer,
  Profit,
  ProfitContainer,
  Roi,
  RoiContainer
}
