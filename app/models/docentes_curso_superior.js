const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('docentes_curso_superior', {
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
    modalidade_ensino: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dependencia_administrativa: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    percentual: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'docentes_curso_superior',
    schema: 'educacao',
    timestamps: false,
    indexes: [
      {
        name: "docentes_curso_superior_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_docentes_curso_superior_lookup",
        fields: [
          { name: "municipio" },
          { name: "ano" },
          { name: "modalidade_ensino" },
          { name: "dependencia_administrativa" },
          { name: "percentual" },
        ]
      },
    ]
  });
};
