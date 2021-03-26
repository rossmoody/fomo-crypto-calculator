import styled from "styled-components"

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  color: ${props => props.theme.subdued};
  text-align: center;
  margin: 100px 0 24px;
  padding: 24px;
  border-top: 1px solid ${props => props.theme.divider};

  & a {
    color: ${props => props.theme.primary};
  }
`

const Item = styled.span`
  margin: 0 0 4px;
`

export { Footer, Item }
