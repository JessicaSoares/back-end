const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Bovinos', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    aptidaoleite: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    aptidaocorte: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    femeas0a12meses: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    femeas13a24meses: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    femeas25a36meses: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    femeasacimade36meses: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    machos0a12meses: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    machos13a24meses: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    machos25a36meses: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    machosacimade36meses: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Bovinos',
    schema: 'prorural',
    timestamps: false
  });
};
