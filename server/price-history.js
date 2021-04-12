const database = require("./firebase-database")

exports.handler = async function (event) {
  const id = event.queryStringParameters.id
  const history = event.queryStringParameters.history

  let price = null

  try {
    const snapshot = database.ref("coins").child(id).child(history)

    price = (await snapshot.once("value")).val()
  } catch (error) {
    console.log("Error reaching database for: ", id, history, error)
  }

  res.send(JSON.stringify(price))

  return {
    statusCode: 200,
    body: JSON.stringify(price)
  }
}
