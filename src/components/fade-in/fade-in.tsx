import React from "react"
import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const Wrapper = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${fadeIn};
    animation-fill-mode: backwards;
  }
`

const FadeIn = ({ duration = 1000, delay = 100, children }) => {
  return (
    <Wrapper
      style={{
        animationDuration: duration + "ms",
        animationDelay: delay + "ms"
      }}
    >
      {children}
    </Wrapper>
  )
}

export default FadeIn
