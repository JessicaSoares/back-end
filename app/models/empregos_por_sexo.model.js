const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empregos_por_sexo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ano: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    admitidos: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    desligados: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    saldo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    estoque: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'empregos_por_sexo',
    schema: 'empregos',
    timestamps: false,
    indexes: [
      {
        name: "empregos_por_sexo_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_empregos_por_sexo_lookup",
        fields: [
          { name: "ano" },
          { name: "mes" },
          { name: "admitidos" },
          { name: "desligados" },
          { name: "saldo" },
          { name: "estoque" },
        ]
      },
    ]
  });
};
