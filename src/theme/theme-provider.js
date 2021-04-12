import React from "react"
import GlobalStyle from "./global-style"
import { ThemeProvider } from "styled-components"
import { FadeIn } from "../components"

const defaultTheme = {
  divider: "#e3e4e4;",
  text: "#192635",
  subdued: "#748497",
  primary: "#e76756",
  positive: "#4db23c",
  negative: "#F94B4B",

  breakpoints: {
    lg: "700px"
  }
}

const ThemeContainer = props => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <FadeIn>{props.children}</FadeIn>
    </ThemeProvider>
  )
}

export default ThemeContainer
