const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atendimento', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    casaabrigo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    casamulher: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ceajum: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    conselhotutelar: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    crm: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    data_entrada: {
      type: DataTypes.DATE,
      allowNull: true
    },
    data_saida: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deam: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    defensoriapublicaestadual: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    delegaciadamulher: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    iml: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    informacao_requerimento: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    motivo_do_atendimento: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    numero_do_processo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    semas: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    semed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    semmu: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    semsa: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    tipo_de_atendimento: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    vara: {
      type: DataTypes.STRING(90),
      allowNull: true
    },
    varadainfanciajuventude: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    partecontraria_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    setor_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    usuaria_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    outros: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    qual_encaminhamento: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    acaoprocesso_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    data_aud_ceajum: {
      type: DataTypes.DATE,
      allowNull: true
    },
    data_aud_forum: {
      type: DataTypes.DATE,
      allowNull: true
    },
    data_centenca: {
      type: DataTypes.DATE,
      allowNull: true
    },
    horas_aud_ceajum: {
      type: DataTypes.DATE,
      allowNull: true
    },
    horas_aud_forum: {
      type: DataTypes.DATE,
      allowNull: true
    },
    obs: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    situacao_da_ficha: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    artesanatocurso: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    artesanatooficina: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    como_soube_da_oficina: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    como_soube_do_curso: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    cortecosturacurso: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    cortecosturaoficina: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    culinariacurso: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    culinariaoficina: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    data_da_visita: {
      type: DataTypes.DATE,
      allowNull: true
    },
    esteticacurso: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    esteticaoficina: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    hora_da_visita: {
      type: DataTypes.DATE,
      allowNull: true
    },
    obs_visita: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    possui_interesse_em_fazer_curso: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    possui_interesse_em_fazer_oficina: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    qualcurso: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    qualoficina: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    qual_sua_expectatica_da_oficina: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    qual_sua_expectatica_do_curso: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    foi_encaminhada: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    acoes_realizadas: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    andamento_do_caso: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    demanda_atendimento: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    obs_retorno: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    referencia: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    sofreu_ou_sofre_algum_tipo_de_viol_recente: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    violencia_reincidente: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'atendimento',
    schema: 'sis_mulher',
    timestamps: false
  });
};
