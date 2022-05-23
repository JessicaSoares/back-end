module.exports = (sequelize, Sequelize) => {
    const Defesa = sequelize.define("queimadas", {
      data: {
        type: Sequelize.INTEGER
      },
      hora: {
        type: Sequelize.STRING
      },
      duracao: {
        type: Sequelize.STRING
      },
      endereco: {
        type: Sequelize.STRING
      },
      bairro: {
        type: Sequelize.STRING
      },
      muncipio: {
        type: Sequelize.STRING
      },
      zona: {
        type: Sequelize.STRING
      },
      natureza: {
        type: Sequelize.STRING
      },
      danos_estruturais: {
        type: Sequelize.STRING
      },
      area_afetada: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.STRING
      },
      log: {
        type: Sequelize.STRING
      },
     }, {
        freezeTableName: true,
        schema: 'defesa_civil',
        tableName: 'queimadas',
        timestamps: false,
      });
  
    return Defesa;

  };
  