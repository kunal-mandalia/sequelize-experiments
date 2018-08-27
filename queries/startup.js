async function startupQueries({ sequelize, models }) {
  try {
    const { Team, Player, Sponsorship } = models
    // Setup seed data
    const seed = await Team.create({
      name: "Arsenal",
      stadium: "Emirates, London",
      players: [
        {
          name: "Aaron Ramsey",
          position: "MID",
          sponsorships: [
            {
              company: "Puma",
              value: 3000000
            }
          ]
        },
        {
          name: "Peter Cech",
          position: "GK",
          sponsorships: [
            {
              company: "Nike",
              value: 5000000
            },
            {
              company: "Emirates Airlines",
              value: 100000
            }
          ]
        }
      ]
    }, {
      include: [
        {
          model: Player,
          include: [
            {
              model: Sponsorship
            }
          ]
        }
      ]
    })
    
  } catch (error) {
    console.log('Failed to run initialization scripts:', error)
  }

}

module.exports = {
  startupQueries
}