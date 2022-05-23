const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('snis_residuo_solido', {
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
    populacao_atendida_coleta_domiciliar: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    servico: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'snis_residuo_solido',
    schema: 'infraestrutura',
    timestamps: false,
    indexes: [
      {
        name: "idx_snis_residuo_solido_lookup",
        fields: [
          { name: "municipio" },
          { name: "ano" },
          { name: "populacao_atendida_coleta_domiciliar" },
          { name: "servico" },
        ]
      },
      {
        name: "snis_residuo_solido_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
