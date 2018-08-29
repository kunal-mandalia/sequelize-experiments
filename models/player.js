'use strict';
module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    teamId: DataTypes.INTEGER
  }, {});
  Player.associate = function(models) {
    // associations can be defined here
    Player.hasMany(models.Sponsorship, { foreignKey: 'playerId', allowNull: false, onDelete: 'CASCADE' })
  };
  return Player;
};