const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produtos_cap', {
    quandidade_produto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unidade_produto: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    categoria_produto: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    tipo_beneficiamento: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    tipo_origem: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    descricao_produto: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    data_venda: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nome_feirante: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    data_nasc_feirante: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tipo_feirante: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    utiliza_transporte_da_pmp: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    data_cadastro_feirante: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_feirante: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nome_localidade: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    identificacao_banca: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'produtos_cap',
    schema: 'prorural',
    timestamps: false
  });
};
