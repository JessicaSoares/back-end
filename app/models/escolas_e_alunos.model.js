const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('escolas_e_alunos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    unidade_ensino: {
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
    quant_alunos: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    quant_professores: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    quant_colaboradores_pedacogicos: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    quant_colaboradores_adm: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total_usuarios: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'escolas_e_alunos',
    schema: 'educacao',
    timestamps: false,

  });
};
