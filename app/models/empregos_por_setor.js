const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empregos_por_setor', {
    ano: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    grupo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    setor: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    admitidos: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    desligados: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    saldo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    estoque: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'empregos_por_setor',
    schema: 'empregos',
    timestamps: false,
    indexes: [
      {
        name: "idx_movimentacao_de_emprego_caged_lookup",
        fields: [
          { name: "ano" },
          { name: "mes" },
          { name: "grupo" },
          { name: "setor" },
          { name: "admitidos" },
          { name: "desligados" },
          { name: "saldo" },
          { name: "estoque" },
          { name: "id" },
        ]
      },
      {
        name: "movimentacao_de_emprego_caged_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
