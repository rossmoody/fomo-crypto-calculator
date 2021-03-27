import styled from "styled-components"

const Hero = styled.main`
  padding: 52px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeroInner = styled.div`
  max-width: 600px;
`

const Headline = styled.h1`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 51px;
  letter-spacing: -0.02em;
  text-align: center;
`

const PseudoInput = styled.span`
  display: inline-flex;
  align-items: center;
  position: relative;
  border-bottom: 2px solid ${props => props.theme.divider};
  margin: 0 8px;

  &::before {
    color: ${props => props.theme.primary};
    position: absolute;
    content: "${props => (props.fiat ? "$" : ",")}";
    left: ${props => (props.fiat ? "12px" : null)};
    right: ${props => (props.fiat ? null : "4px")};
  }
`

const Input = styled.input`
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  color: ${props => props.theme.primary};
  border: none;
  margin: 0 8px;
  width: ${props => (props.fiat ? "72px" : "180px")};
  padding: ${props => (props.fiat ? "0 0 0 28px" : "0 12px 0 0")};
`

export { Headline, Hero, HeroInner, Input, PseudoInput }
