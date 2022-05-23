const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Acidente', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ano: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    tipo_acidente: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    severidade: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    condicao_tempo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sinalizacao_semaforica: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sinalizacao_vertical: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sinalizacao_horizontal: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sexo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tipo_veiculo: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    idade: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Acidente',
    schema: 'transito',
    timestamps: false
  });
};
