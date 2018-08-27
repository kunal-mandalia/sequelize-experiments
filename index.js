const { sequelize, Sequelize } = require('./db')
const { setupModels } = require('./models/index')
const { startupQueries } = require('./queries/startup')
const { mainQueries } = require('./queries/main')

async function main() {
  try {
    await sequelize.authenticate()
    // setup models
    const models = await setupModels({ sequelize, Sequelize })
    // setup seed data
    await startupQueries({ sequelize, models })
    // query data
    await mainQueries({ models })
  } catch (error) {
    console.log("main error: ", error)
  }
}
main()