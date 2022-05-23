const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orgaos_api', {
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
    tableName: 'orgaos_api',
    schema: 'orcarmento',
    timestamps: false,
    indexes: [
      {
        name: "idx_orgaos_api_lookup",
        fields: [
          { name: "id_orgao" },
          { name: "ano" },
          { name: "nome_orgao" },
        ]
      },
    ]
  });
};
