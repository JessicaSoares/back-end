const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empregos_por_municipio', {
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
    municipio: {
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
    }
  }, {
    sequelize,
    tableName: 'empregos_por_municipio',
    schema: 'empregos',
    timestamps: false,
    indexes: [
      {
        name: "empregos_por_municipio_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_empregos_por_municipio_lookup",
        fields: [
          { name: "ano" },
          { name: "mes" },
          { name: "municipio" },
          { name: "admitidos" },
          { name: "desligados" },
        ]
      },
    ]
  });
};
