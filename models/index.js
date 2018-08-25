async function setupModels({ sequelize, Sequelize }) {
  const User = await sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  });

  return {
    User
  }
}

module.exports = {
  setupModels
}