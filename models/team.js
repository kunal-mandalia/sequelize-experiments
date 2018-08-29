'use strict';
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: DataTypes.STRING,
    stadium: DataTypes.STRING
  }, {});
  Team.associate = function(models) {
    // associations can be defined here
    Team.hasMany(models.Player, { foreignKey: 'teamId', allowNull: false, onDelete: 'CASCADE' })
  };
  return Team;
};