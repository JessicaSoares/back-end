module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("empregos", {
    ano: {
      type: Sequelize.INTEGER
    },
    mes: {
      type: Sequelize.STRING
    },
    grupo: {
      type: Sequelize.STRING
    },
    setor: {
      type: Sequelize.STRING
    },
    admitidos: {
      type: Sequelize.STRING
    },
    desligados: {
      type: Sequelize.STRING
    },
    saldo: {
      type: Sequelize.STRING
    },
    estoque: {
      type: Sequelize.STRING
    },
   }, {
      freezeTableName: true,
      schema: 'empregos',
      tableName: 'movimentacao_de_emprego_caged',
      timestamps: false,
    });

  return Tutorial;

  
};
