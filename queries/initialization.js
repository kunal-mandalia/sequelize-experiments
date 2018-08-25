async function initializationQueries({ sequelize, models }) {
  try {
    // example of raw queries. Drop all users and add one user
    await sequelize.query('DELETE FROM "users" WHERE TRUE;')
    const seedUsers = await sequelize.query(`INSERT INTO "users" ("id","firstName","lastName","createdAt","updatedAt") VALUES (DEFAULT,'John','Hancock','2018-08-25 18:55:44.216 +00:00','2018-08-25 18:55:44.216 +00:00') RETURNING *;`)
    // await sequelize.query('insert into users ')
  } catch (error) {
    console.log('Failed to run initialization scripts:', error)
  }

}

module.exports = {
  initializationQueries
}