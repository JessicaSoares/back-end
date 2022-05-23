const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pagamento_despesas_teste', {
    id_orgao: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    datamovimento: {
      type: DataTypes.DATE,
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
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    id_elemento_despesa: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pagamento_despesas_teste',
    schema: 'orcarmento',
    timestamps: false
  });
};
