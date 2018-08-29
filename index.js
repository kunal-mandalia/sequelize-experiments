const db = require('./models/index')
const { mainQueries } = require('./queries/main')

async function main() {
  try {
    await mainQueries(db)
  } catch (error) {
    console.log("main error: ", error)
  }
}
main()