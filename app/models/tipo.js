const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tipo',
    schema: 'comercio_exterior',
    timestamps: false,
    indexes: [
      {
        name: "idx_tipo_lookup",
        fields: [
          { name: "descricao" },
        ]
      },
      {
        name: "tipo_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
