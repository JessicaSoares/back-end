const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pagamento_despesas_api', {
    id_orgao: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    datamovimento: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    numerodocumento: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    numeroempenho: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    credor: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cnpjcpf: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    naturezadadespesa: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    modalidadelicitacao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    registro: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    valor: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    idempenho: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pagamento_despesas_api',
    schema: 'orcarmento',
    timestamps: false,
    indexes: [
      {
        name: "idx_pagamento_despesas_api_lookup",
        fields: [
          { name: "id_orgao" },
          { name: "datamovimento" },
          { name: "numerodocumento" },
          { name: "numeroempenho" },
          { name: "credor" },
          { name: "cnpjcpf" },
          { name: "naturezadadespesa" },
          { name: "modalidadelicitacao" },
          { name: "registro" },
          { name: "valor" },
          { name: "idempenho" },
        ]
      },
    ]
  });
};
