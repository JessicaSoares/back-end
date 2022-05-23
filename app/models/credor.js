const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('credor', {
    id: {
      type: DataTypes.TEXT,
      allowNull: true,
      primaryKey: true
    },
    nome: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'credor',
    schema: 'orcarmento',
    timestamps: false,
    indexes: [
      {
        name: "idx_credor_lookup",
        fields: [
          { name: "id" },
          { name: "nome" },
        ]
      },
    ]
  });
};
