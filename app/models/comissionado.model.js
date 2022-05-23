const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comissionado', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cargo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    funcao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lotacao: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    setor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    vinculo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    dataadmissao: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'comissionado',
    schema: 'folha_pagamento',
    timestamps: false
  });
};
