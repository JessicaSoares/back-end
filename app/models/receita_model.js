const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Receita', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    ano: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    especificacao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    codigo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sum: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Receita',
    schema: 'orcarmento',
    timestamps: false
  });
};
