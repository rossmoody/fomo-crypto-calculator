import styled from "styled-components"

const Coin = styled.li`
  display: flex;
  padding: 20px 24px;
  font-size: 18px;
  font-weight: 500;
  word-break: break-word;
  border-bottom: 1px solid ${props => props.theme.divider};
`

const ImageContainer = styled.div`
  display: flex;
  align-items: start;
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
  margin-right: 20px;
`

const CoinsOwned = styled.span`
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 400;
  color: ${props => props.theme.subdued};
`

const Profit = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-end;
  text-align: end;
`

const Roi = styled.span`
  font-weight: 400;
  font-size: 15px;
  color: ${props =>
    props.positive ? props.theme.positive : props.theme.negative};
`

export { Coin, CoinsOwned, Image, ImageContainer, Profit, Roi, Title }
