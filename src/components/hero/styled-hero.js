import styled from "styled-components"

const Hero = styled.main`
  padding: 52px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeroInner = styled.div`
  max-width: ${props => props.theme.breakpoints.lg};
`

const Headline = styled.h1`
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -0.02em;
  text-align: center;

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    font-size: 32px;
    line-height: 48px;
  }
`

const PseudoInput = styled.span`
  display: inline-flex;
  align-items: center;
  position: relative;
  border-bottom: 2px solid ${props => props.theme.divider};
  margin: 0 8px;

  &::before {
    position: absolute;
    content: "${props => (props.fiat ? "$" : ",")}";
    color: ${props => props.theme.primary};
    left: ${props => (props.fiat ? "2px" : null)};
    right: ${props => (props.fiat ? null : "4px")};
  }
`

const Input = styled.input`
  border: none;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  color: ${props => props.theme.primary};
  padding-left: ${props => (props.fiat ? "28px" : "")};
  width: ${props => (props.fiat ? "74px" : "238px")};

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    padding-left: ${props => (props.fiat ? "24px" : "")};
    width: ${props => (props.fiat ? "60px" : "200px")};
  }
`

export { Headline, Hero, HeroInner, Input, PseudoInput }
