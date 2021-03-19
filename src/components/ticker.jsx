const rootApiUrl = "https://api.coingecko.com/api/v3"
const cryptoData = `${rootApiUrl}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`

async function fetchCryptoData(url) {
  const response = await fetch(url)
  const json = await response.json()
  return json
}

async function test() {
  const todaysCryptoData = await fetchCryptoData(cryptoData)
  const historicalCoinData = await fetchCryptoData(
    "https://api.coingecko.com/api/v3/coins/bitcoin/history?date=30-12-2017"
  )
  console.log(todaysCryptoData)
  console.log(historicalCoinData.market_data.current_price.usd)
}

export default test

// 1. get the historical date
// 2. get the money invested
// 3. grab the top 100 coins from today
// 4. for each coin, get the price of that coin from the date
// 5. for each coin that has a date price
//          calculate the (money/crypto price) = amount of crypto owned
//          calculate the (amount of crypto owned * todays price) = value today
