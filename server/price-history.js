const database = require("./firebase-database")

exports.handler = async function (event) {
  const id = event.queryStringParameters.id
  const history = event.queryStringParameters.history

  try {
    const coinRef = database.ref("coins").child(id)
    const snapshot = (await coinRef.once("value")).val()

    for (const obj of Object.values(snapshot)) {
      if (obj.date === history) {
        return {
          statusCode: 200,
          body: JSON.stringify(obj.price)
        }
      }
    }
  } catch (error) {
    console.log(`Error getting past price of ${id} on ${history}`)
    return {
      statusCode: 200,
      body: JSON.stringify(0)
    }
  }
}
