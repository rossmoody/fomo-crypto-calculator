import React from "react"

const ProfitLoss = ({ coins }) => {
  if (!coins) return <div>Loader</div>

  return (
    <ul>
      {coins.map((coin, index) => {
        return <li key={index}>{JSON.stringify(coin)}</li>
      })}
    </ul>
  )
}

export default ProfitLoss
