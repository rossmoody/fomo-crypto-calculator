const database = require('./firebase-database')

exports.handler = async function (req) {
  const [year, month, day] = req.queryStringParameters.history.split('-')
  const reformattedDate = `${day}-${month}-${year}`

  let price = null

  try {
    const snapshot = database
      .ref('coins')
      .child(req.queryStringParameters.id)
      .child(reformattedDate)

    price = (await snapshot.once('value')).val()
  } catch (error) {
    console.log('Error reaching database for: ', id, history, error)
  }

  return {
    statusCode: 200,
    body: JSON.stringify(price)
  }
}
