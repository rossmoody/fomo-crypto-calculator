// const axios = require("axios")

// const coingecko = axios.create({
//   baseURL: "https://api.coingecko.com/api/v3/coins",
//   headers: {
//     "Content-Type": "application/json"
//   }
// })

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify("Hello Worldddddd")
  }
}
