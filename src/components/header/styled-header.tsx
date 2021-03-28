import styled from "styled-components"

const Heading = styled.header`
  display: flex;
  height: 100px;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.divider};
`

const Logo = styled.div`
  margin-bottom: -20px;
  width: 250px;
`

export { Heading, Logo }
