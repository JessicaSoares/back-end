const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Produtos Cap', {
    data_venda: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tipo_origem: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    tipo_beneficiamento: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    categoria_produto: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    unidade_produto: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Produtos Cap',
    schema: 'prorural',
    timestamps: false
  });
};
