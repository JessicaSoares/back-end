const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orgaos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_orgao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ano: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    nome_orgao: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'orgaos',
    schema: 'orcarmento',
    timestamps: false,
    indexes: [
      {
        name: "idx_orgaos_lookup",
        fields: [
          { name: "id_orgao" },
          { name: "ano" },
          { name: "nome_orgao" },
        ]
      },
      {
        name: "orgaos_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
