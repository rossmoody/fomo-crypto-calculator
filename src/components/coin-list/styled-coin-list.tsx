import styled from "styled-components"

const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 48px;
  width: 100%;
`

const Validation = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  max-width: 600px;
`

const Emoji = styled.span`
  font-size: 40px;
  margin: 0 0 24px;
`

export { Emoji, UnorderedList, Validation }
