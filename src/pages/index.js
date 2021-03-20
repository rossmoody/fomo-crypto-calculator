import React, { useState, useEffect } from "react"
// import getCryptoData from "../controllers/coin-controller"
import { Header } from "../components"

const IndexPage = () => {
  const [cryptoData, setCryptoData] = useState()
  const [date, setDate] = useState("30-12-2017")
  const [investment, setInvestment] = useState(100)

  useEffect(() => {
    if (!cryptoData) {
      console.log("hello")
      // getCryptoData(date, investment).then(result => {
      //   setCryptoData(result)
      //   console.log(result)
      // })
    }
  })

  return (
    <>
      <header>
        <Header />
      </header>
      <main>{JSON.stringify(cryptoData)}</main>
    </>
  )
}

export default IndexPage
