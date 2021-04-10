const database = require("./firebase-database")

exports.handler = async function (event) {
  const id = event.queryStringParameters.id
  const history = event.queryStringParameters.history

  const coinRef = database.ref("coins").child(id)
  const snapshot = (await coinRef.once("value")).val()

  try {
    for (const obj of Object.values(snapshot)) {
      if (obj.date === history) {
        return {
          statusCode: 200,
          body: JSON.stringify(obj.price)
        }
      }
    }
  } catch (error) {
    return {
      statusCode: 200,
      body: JSON.stringify(0)
    }
  }
}
