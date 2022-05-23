const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pequenoporte', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    razao_social: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    ramo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bairro: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ano_de_abertura: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    porte_da_empresa: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pequenoporte',
    schema: 'empresas',
    timestamps: false
  });
};
