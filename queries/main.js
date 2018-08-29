async function mainQueries(db) {
  const { Team, Player, Sponsorship } = db
  const data = await Team.findAll({
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
  
  data.forEach(team => {
    console.log(`${team.get('name')} has:`)
    const players = team.get('Players')
    players.forEach(player => {
      console.log(` ${player.get('name')} who is sponsored by:`)
      const sponsorships = player.get('Sponsorships')
      sponsorships.forEach(sponsorship => {
        console.log(`   ${sponsorship.company}, valued at ${sponsorship.value}`)
      })
    })
  })
}

module.exports = {
  mainQueries
}