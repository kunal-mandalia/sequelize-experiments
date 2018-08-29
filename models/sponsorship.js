'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sponsorship = sequelize.define('Sponsorship', {
    company: DataTypes.STRING,
    value: DataTypes.INTEGER,
    playerId: DataTypes.INTEGER
  }, {});
  Sponsorship.associate = function(models) {
    // associations can be defined here
  };
  return Sponsorship;
};