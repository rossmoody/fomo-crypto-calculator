import styled from "styled-components"
import ReactLoader from "react-loader-spinner"

const Loader = styled(ReactLoader)`
  & svg {
    display: flex;
    height: 48px;
    width: 48px;
    margin: 48px;
    fill: ${props => props.theme.primary};
  }
`

export { Loader }
