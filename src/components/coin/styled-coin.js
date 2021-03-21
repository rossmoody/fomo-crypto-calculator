import styled from "styled-components"

const Coin = styled.li`
  display: flex;
  padding: 20px 24px;
  border-bottom: 1px solid ${props => props.theme.divider};
`

const Image = styled.div`
  display: flex;
  justify-content: start;
  height: 32px;
  width: 32px;
  margin-right: 16px;
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 500;
  flex: 1;
`
const CoinsOwned = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
`

const Profit = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-end;
`

export { Coin, CoinsOwned, Image, Profit, Title }
