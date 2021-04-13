import React from 'react'
import * as S from './styled-graveyard'
import { ICoinState } from '../home/home'
import ReactTooltip from 'react-tooltip'

function hasData(arr: ICoinState): boolean {
  const filteredSet = arr.data.filter(coin => !coin.past_price)
  if (filteredSet.length) return true
}

const Graveyard = ({ coinState }: { coinState: ICoinState }) => {
  switch (coinState.result) {
    case 'error':
    case 'future':
    case 'empty':
    case 'loading':
    case 'past':
      return null

    default:
      return (
        <S.Graveyard>
          {hasData(coinState) && (
            <S.Descriptor>
              No pricing information for these coins on that date...
            </S.Descriptor>
          )}
          <S.CoinContainer>
            {coinState.data
              .filter(coin => !coin.past_price)
              .map((coin, index) => {
                return (
                  <S.ImageContainer data-tip data-for={coin.name} key={index}>
                    <ReactTooltip
                      id={coin.name}
                      backgroundColor="#192635"
                      delayShow={100}
                      delayHide={300}
                      effect="solid"
                      place="top"
                      className="react-tooltip"
                    >
                      {coin.name}
                    </ReactTooltip>
                    <S.Image src={coin.image} key={index} />
                  </S.ImageContainer>
                )
              })}
          </S.CoinContainer>
        </S.Graveyard>
      )
  }
}

export default Graveyard
