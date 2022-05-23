const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('iluminacao', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    etiqueta: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'região': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bairro: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'endereço': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'número': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cep: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'observaç�': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    latitude: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    longitude: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    estrutura: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    validade: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    equipe: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'Data de ca': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'Data de in': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'Origem da': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'tipo': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'Tipo de _1': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'Tipo de _2': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'Tipo de _3': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'Tipo de _4': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'Tipo de _5': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'Tipo de _6': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'Tipo de _7': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'Tipo de _8': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'Tipo de _9': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'Tipo de 10': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'Tipo de 11': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'Tipo de 12': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'Tipo de 13': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'Tipo de 14': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'Tipo de 15': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'Tipo de 16': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'potência': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'potênci_1': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'potênci_2': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'potênci_3': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'potênci_4': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'potênci_5': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'potênci_6': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'potênci_7': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'potênci_8': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'potênci_9': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'potênci10': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'potênci11': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'potênci12': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'potênci13': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'potênci14': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'potênci15': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'potênci16': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    x: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    y: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    layer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    path: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    long_gms: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lati_gms: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'iluminacao',
    schema: 'infraestrutura',
    timestamps: false,
    indexes: [
      {
        name: "iluminacao_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
