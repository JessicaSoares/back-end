const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Agricultura Familiar', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    datanascimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    sexo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    escolaridade: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    feirante: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Agricultura Familiar',
    schema: 'prorural',
    timestamps: false
  });
};
