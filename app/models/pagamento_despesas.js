const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pagamento_despesas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_orgao: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    datamovimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    numerodocumento: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    numeroempenho: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    credor: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cnpjcpf: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    naturezadadespesa: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    modalidadelicitacao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    registro: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    valor: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    idempenho: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_elemento_despesa: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pagamento_despesas',
    schema: 'orcarmento',
    timestamps: false,
    indexes: [
      {
        name: "pagamento_despesas_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
