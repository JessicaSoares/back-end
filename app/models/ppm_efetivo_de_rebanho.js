const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ppm_efetivo_de_rebanho', {
    codigo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    municipio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    variavel: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tipo_rebanho: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ano: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    valor: {
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
    tableName: 'ppm_efetivo_de_rebanho',
    schema: 'producao_pecuaria_municipal',
    timestamps: false,
    indexes: [
      {
        name: "ppm_efetivo_de_rebanho_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
