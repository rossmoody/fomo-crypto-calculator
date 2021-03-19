import * as React from "react"

async function test() {
  const todaysCryptoData =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  const historicalCryptoData =
    "https://api.coingecko.com/api/v3/coins/bitcoin/history?date=30-12-2017"
  const response = await fetch(historicalCryptoData)
  const body = await response.json()
  console.log(body.market_data.current_price.usd)
}

test()

const IndexPage = () => {
  return (
    <>
      <header>
        <h1>Header section</h1>
      </header>
      <main>
        <h1>Main section</h1>
      </main>
    </>
  )
}

export default IndexPage
