import { propTypes } from "gatsby-plugin-image/dist/src/components/gatsby-image.server"
import styled from "styled-components"

const Graveyard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 24px;
`

const Descriptor = styled.span`
  color: ${props => props.theme.subdued};
  text-align: center;
  margin: 0 0 20px;
`

const CoinContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const ImageContainer = styled.div`
  padding: 8px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid ${props => props.theme.divider};
  margin: 4px;

  &:hover {
    cursor: pointer;
  }
`

const Image = styled.img`
  height: 20px;
  width: 20px;
`

export { CoinContainer, Descriptor, Graveyard, Image, ImageContainer }
