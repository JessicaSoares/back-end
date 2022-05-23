const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('snis_agua', {
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
    populacao_atendida_abastecimento: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    ligacoes_ativas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    volume_agua_tratada_eta: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    volume_agua_consumido: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    economias_residencias_ativas: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    populacao_urbana_atendida: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'snis_agua',
    schema: 'infraestrutura',
    timestamps: false,

  });
};
