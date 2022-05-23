const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fonte', {
    id_fonte: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome_fonte: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'fonte',
    schema: 'portal',
    timestamps: false,
    indexes: [
      {
        name: "fonte_pkey",
        unique: true,
        fields: [
          { name: "id_fonte" },
        ]
      },
    ]
  });
};
