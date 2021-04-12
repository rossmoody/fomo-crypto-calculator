import styled from "styled-components"

const Section = styled.section`
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: ${props => props.theme.breakpoints.lg};
  flex-direction: column;
  align-items: center;
`

export { Container, Section }
