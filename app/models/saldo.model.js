const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Saldo', {
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
    saldo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total_exportacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total_importacao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Saldo',
    schema: 'comercio_exterior',
    timestamps: false
  });
};
