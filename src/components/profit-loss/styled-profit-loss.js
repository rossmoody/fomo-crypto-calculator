import styled from "styled-components"

const Section = styled.section`
  display: flex;
  justify-content: center;
  border-top: 1px solid ${props => props.theme.divider};
`

const Container = styled.div`
  max-width: 600px;
  width: 100%;
`

const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export { Container, Section, UnorderedList }
