const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('queimada', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hora: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    duracao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    endereco: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bairro: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    muncipio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    natureza: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'queimada',
    schema: 'defesa_civil',
    timestamps: false
  });
};
