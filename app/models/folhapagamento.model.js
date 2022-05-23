module.exports = (sequelize, Sequelize) => {
    const FolhaPagamento = sequelize.define("folha_pagamento", {
      cargo: {
        type: Sequelize.INTEGER
      },
      competencia: {
        type: Sequelize.STRING
      },
      dataadmissao: {
        type: Sequelize.STRING
      },
      descinss: {
        type: Sequelize.STRING
      },
      descirpf: {
        type: Sequelize.STRING
      },
      funcao: {
        type: Sequelize.STRING
      },
      lotacao: {
        type: Sequelize.STRING
      },

     }, {
        freezeTableName: true,
        schema: 'folha_pagamento',
        tableName: 'folha_pagamento',
        timestamps: false,
      });
  
    return FolhaPagamento;

  };
  