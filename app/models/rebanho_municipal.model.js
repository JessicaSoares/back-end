const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Rebanho Municipal', {
    valor: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ano: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tipo_rebanho: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    municipio: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Rebanho Municipal',
    schema: 'producao_pecuaria_municipal',
    timestamps: false
  });
};
