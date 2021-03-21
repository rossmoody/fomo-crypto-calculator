import styled from "styled-components"

const Coin = styled.li`
  display: flex;
  padding: 20px 24px;
  border-bottom: 1px solid ${props => props.theme.divider};
  font-size: 18px;
  font-weight: 500;
`

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`

const Image = styled.img`
  height: 32px;
  width: 32px;
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
const CoinsOwned = styled.span`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.theme.subdued};
`

const Profit = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-end;
`

const Roi = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: ${props => props.theme.success};
`

export { Coin, CoinsOwned, Image, ImageContainer, Profit, Roi, Title }
