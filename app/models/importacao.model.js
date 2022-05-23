const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Importacao', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    ano: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    municipio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    descricao_sh2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    valor_fob: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Importacao',
    schema: 'comercio_exterior',
    timestamps: false
  });
};
