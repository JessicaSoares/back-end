const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('elemento_despesa', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    nome: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ano: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'elemento_despesa',
    schema: 'orcarmento',
    timestamps: false
  });
};
