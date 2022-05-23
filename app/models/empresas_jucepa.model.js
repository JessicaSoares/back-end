const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empresas_jucepa', {
    razao_social: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    cnae: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cnpj: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ramo: {
      type: DataTypes.STRING(10000),
      allowNull: true
    },
    atividade: {
      type: DataTypes.STRING(10000),
      allowNull: true
    },
    inscricao_municipal: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    bairro: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    logradouro: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    numero: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    possue_alvara_2021: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ano_de_abertura: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    situacao_cnpj: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    porte_da_empresa: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'empresas_jucepa',
    schema: 'empresas',
    timestamps: false
  });
};
