import React from "react"

function resizeInputWidth() {
  const fiat: HTMLInputElement = document.querySelector("#fiat")
  fiat.style.width = (fiat.value.length + 1) * 18 + "px"
}

function Hero() {
  return (
    <div className="hero">
      <div className="hero__text">
        <h1>
          If I invested
          <span className="highlight fiat">
            <input
              onKeyUp={resizeInputWidth}
              type="number"
              id="fiat"
              className="input"
              defaultValue={100}
            />
          </span>
          into cryptocurrency on{" "}
          <span className="highlight date">
            <input
              type="date"
              id="date"
              size={6}
              className="input"
              defaultValue="2016-01-01"
            />
          </span>
          today it would be worth...
        </h1>
      </div>
    </div>
  )
}

export default Hero
