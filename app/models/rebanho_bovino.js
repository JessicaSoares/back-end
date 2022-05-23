const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rebanho_bovino', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    data: {
      type: DataTypes.DATE,
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
    },
    rebanho_bovino_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rebanho_bovino',
    schema: 'prorural',
    timestamps: false
  });
};
