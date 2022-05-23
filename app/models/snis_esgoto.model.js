const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('snis_esgoto', {
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
      type: DataTypes.TEXT,
      allowNull: true
    },
    populacao_atendida: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    volume_esgoto_coletado: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    volume_esgoto_tratado: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    populacao_atendida_urbana: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'snis_esgoto',
    schema: 'infraestrutura',
    timestamps: false,
    indexes: [
      {
        name: "idx_snis_esgoto_lookup",
        fields: [
          { name: "municipio" },
          { name: "ano" },
          { name: "populacao_atendida" },
          { name: "volume_esgoto_coletado" },
          { name: "volume_esgoto_tratado" },
          { name: "populacao_atendida_urbana" },
        ]
      },
      {
        name: "snis_esgoto_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
