const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('municipio', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    municipio: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'municipio',
    schema: 'comercio_exterior',
    timestamps: false,
    indexes: [
      {
        name: "idx_municipio_lookup",
        fields: [
          { name: "municipio" },
        ]
      },
      {
        name: "municipio_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
