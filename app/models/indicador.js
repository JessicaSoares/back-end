const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('indicador', {
    id_indicador: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ano: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    descricao: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    link_fonte: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    link_acesso_navegador: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    codigo_html: {
      type: DataTypes.STRING(600),
      allowNull: true
    },
    valor: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ultima_atualizacao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    proxima_atualizacao: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    periodicidade_atualizacao: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    tipo_atualizacao: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categoria',
        key: 'id_categoria'
      }
    },
    fonte_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'fonte',
        key: 'id_fonte'
      }
    }
  }, {
    sequelize,
    tableName: 'indicador',
    schema: 'portal',
    timestamps: false,
    indexes: [
      {
        name: "indicador_pkey",
        unique: true,
        fields: [
          { name: "id_indicador" },
        ]
      },
    ]
  });
};
