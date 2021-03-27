import styled from "styled-components"
import ReactLoader from "react-loader-spinner"

const Section = styled.section`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: ${props => props.theme.breakpoints.lg};
  justify-content: center;
`

const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`

const Loader = styled(ReactLoader)`
  & svg {
    display: flex;
    height: 48px;
    width: 48px;
    margin: 48px;
    fill: ${props => props.theme.primary};
  }
`

export { Container, Loader, Section, UnorderedList }
