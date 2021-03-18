exports.handler = async function (event, context) {
  console.log("Where does this end up?")
  console.log(event, context)
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" })
  }
}
