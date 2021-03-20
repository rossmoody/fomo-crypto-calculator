import styled from "styled-components"

const Hero = styled.div`
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
  color: white;

  &::before {
    position: absolute;
    content: "${props => (props.fiat ? "$" : ",")}";
    left: ${props => (props.fiat ? "16px" : null)};
    right: ${props => (props.fiat ? null : "16px")};
  }
`

const Input = styled.input`
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  color: white;
  border: none;
  margin: 0 8px;
  height: 44px;

  background: ${props => props.theme.primary};
  width: ${props => (props.fiat ? "72px" : "185px")};
  padding: ${props => (props.fiat ? "0 0 0 30px" : "0 12px")};
`

export { Headline, Hero, HeroInner, Input, PseudoInput }
