const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Despesa', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    ano: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mes: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    orgao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    elemento_despesa: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    despesa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Despesa',
    schema: 'orcarmento',
    timestamps: false
  });
};
