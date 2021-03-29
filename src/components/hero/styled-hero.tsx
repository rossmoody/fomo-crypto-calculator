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

const BaseInputSpan = styled.span`
  display: inline-flex;
  align-items: center;
  position: relative;
  border-bottom: 2px solid ${props => props.theme.divider};
  margin: 0 12px;
  height: 48px;
  justify-content: center;

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    width: 44px;
  }

  &::before {
    position: absolute;
    color: ${props => props.theme.primary};
  }
`

const MoneySpan = styled(BaseInputSpan)`
  width: 120px;

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    width: 100px;
  }

  &::before {
    content: "$";
    left: 0;
  }
`

const DateSpan = styled(BaseInputSpan)`
  width: 250px;

  @media screen and (max-width: ${props => props.theme.breakpoints.lg}) {
    width: 220px;
  }

  &::before {
    content: ",";
    right: 4px;
  }
`

const BaseInput = styled.input`
  border: none;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  width: inherit;
  background: none;
  text-align: center;
  color: ${props => props.theme.primary};
`

const MoneyInput = styled(BaseInput)`
  padding: 0 0 0 16px;
`

const DateInput = styled(BaseInput)``

export { DateInput, DateSpan, Headline, Hero, HeroInner, MoneyInput, MoneySpan }
