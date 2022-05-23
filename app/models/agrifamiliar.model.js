module.exports = (sequelize, Sequelize) => {
    const AgriculturaFamiliar = sequelize.define("agricultura_familiar", {
      bairro: {
        type: Sequelize.INTEGER
      },
      datanascimento: {
        type: Sequelize.STRING
      },
      escolaridade: {
        type: Sequelize.STRING
      },
      estadocivil: {
        type: Sequelize.STRING
      },
      feirante: {
        type: Sequelize.STRING
      },
      tipoprodutor: {
        type: Sequelize.STRING
      },
     }, {
        freezeTableName: true,
        schema: 'prorural',
        tableName: 'agricultura_familiar',
        timestamps: false,
      });
  
    return AgriculturaFamiliar;

  };
  