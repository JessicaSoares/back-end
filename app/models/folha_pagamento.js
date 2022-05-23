const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('folha_pagamento', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    cargo: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    competencia: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    dataadmissao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    descinss: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    descirpf: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    funcao: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    lotacao: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    matricula: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    setor: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    tipofolha: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    valorliquido: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    valorbruto: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    vantgratificacoes: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    vantpessoais: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    vantvencimento: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    vinculo: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    servidor_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    descontosdiversos: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    retencaoteto: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    totaldebitos: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'folha_pagamento',
    schema: 'folha_pagamento',
    timestamps: false
  });
};
