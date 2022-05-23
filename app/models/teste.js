const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teste', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    teste: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'teste',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "teste.tests_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

