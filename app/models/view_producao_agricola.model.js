const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('view_producao_agricola', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    ano: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    municipio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    variavel: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    produto: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    quantidade: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'view_producao_agricola',
    schema: 'producao_agricola_municipal',
    timestamps: false
  });
};
