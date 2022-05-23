const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nota_ideb_municipio', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    municipio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ano: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    serie_ano: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ideb: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'nota_ideb_municipio',
    schema: 'educacao',
    timestamps: false,
    indexes: [
      {
        name: "idx_nota_ideb_municipio_lookup",
        fields: [
          { name: "municipio" },
          { name: "ano" },
          { name: "serie_ano" },
          { name: "ideb" },
        ]
      },
      {
        name: "nota_ideb_municipio_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
