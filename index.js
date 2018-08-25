const { sequelize, Sequelize } = require('./db')
const { setupModels } = require('./models/index')
const { initializationQueries } = require('./queries/initialization')

async function main() {
  try {
    await sequelize.authenticate()
    // setup models
    const models = await setupModels({ sequelize, Sequelize })
    // init query
    await initializationQueries({ sequelize, models })
    // 
  } catch (error) {
    console.log("Main error: ", error)
  }
}
main()