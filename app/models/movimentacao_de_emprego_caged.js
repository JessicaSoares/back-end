const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('movimentacao_de_emprego_caged', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mes: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    grupo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    setor: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    admitidos: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    desligados: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    saldo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    estoque: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'movimentacao_de_emprego_caged',
    schema: 'empregos',
    timestamps: false,
    indexes: [
      {
        name: "movimentacao_de_emprego_caged_pkey1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
