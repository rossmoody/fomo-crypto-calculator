const database = require("./firebase-database")

exports.handler = async function (event) {
  const id = event.queryStringParameters.id
  const history = event.queryStringParameters.history

  let price = 0

  try {
    const coinRef = database.ref("coins").child(id)
    const snapshot = (await coinRef.once("value")).val()

    for (const obj of Object.values(snapshot)) {
      if (obj.date === history) {
        price = obj.price
      }
    }
  } catch (error) {
    console.log(`Error getting past price of ${id} on ${history}`, error)
  }

  return {
    statusCode: 200,
    body: JSON.stringify(price)
  }
}
