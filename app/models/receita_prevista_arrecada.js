const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('receita_prevista_arrecada', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    codigo_cassificacao_economica: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    especificacao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    previsao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    arrecadado: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'receita_prevista_arrecada',
    schema: 'orcarmento',
    timestamps: false,
    indexes: [
      {
        name: "receita_prevista_arrecada_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
