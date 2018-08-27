let models = {}

async function setupModels({ sequelize, Sequelize }) {
  await sequelize.drop()

  const Team = await sequelize.define('team', {
    name: {
      type: Sequelize.STRING
    },
    stadium: {
      type: Sequelize.STRING
    }
  })

  const Player = await sequelize.define('player', {
    name: {
      type: Sequelize.STRING
    },
    position: {
      type: Sequelize.ENUM('GK', 'DEF', 'MID', 'ATT')
    }
  })

  const Sponsorship = await sequelize.define('sponsorship', {
    company: {
      type: Sequelize.STRING
    },
    value: {
      type: Sequelize.INTEGER
    }
  })

  Team.hasMany(Player, { foreignKey: { allowNull: false, onDelete: 'CASCADE' }})
  Player.hasMany(Sponsorship, { foreignKey: { allowNull: false, onDelete: 'CASCADE' }})

  models = {
    Team,
    Player,
    Sponsorship
  }

  await sequelize.sync({force: true})
  return models
}

module.exports = {
  getModels: () => models,
  setupModels
}