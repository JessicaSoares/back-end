const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Aves', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    finalidadeavicultura: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    finalidadecorte: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    finalidadepostura: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Aves',
    schema: 'prorural',
    timestamps: false
  });

};
