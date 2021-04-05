import database from "./firebase-database"

async function updateDatabase() {
  database
    .ref()
    .once("value")
    .then(snapshot => {
      console.log(snapshot.val())
    })
}

export default updateDatabase
