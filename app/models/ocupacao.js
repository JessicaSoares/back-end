const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ocupacao', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ocupacao',
    schema: 'sis_mulher',
    timestamps: false,
    indexes: [
      {
        name: "idx_ocupacao_lookup",
        fields: [
          { name: "id" },
          { name: "descricao" },
        ]
      },
    ]
  });
};
