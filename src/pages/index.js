import * as React from "react"

async function test() {
  const response = await fetch("/.netlify/functions/netlify")
  const body = await response.json()
  console.log(body)
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
