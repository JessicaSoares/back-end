const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bovinocultura', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    aptidaocorte: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    aptidaoleite: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bebedourofonte: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bebedouromanilha: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bebedourotambor: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    cochoscomcobertura: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    cochossemcobertura: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    controleendoectoquais: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    controleendoectoparasitas: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    controlemamiteposdipping: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    controlemamitepredipping: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    controlemamiteseqordenha: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    controlemamitetestecaneca: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    controlemamitetestecmt: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    curralestruturaaguaencanada: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    curralestruturabalanca: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    curralestruturabrete: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    curralestruturacobertura: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    curralestruturapisoconcreto: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    curralestruturaquantdivisoes: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    curralestruturaseringa: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    curralestruturatamanho: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    curralestruturatronco: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    destinacaoleiteconsumo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    destinacaoleiteoutros: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    destinacaoleiteprodartesanal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    destinacaoleitevenda: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    examesdorebanho: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    finalidadebovinocultura: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    finalidadecria: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    finalidadeleite: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    finalidaderecria: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    finalidadeterminacao: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    fonteaguanascente: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    fonteaguapocoartesiano: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    fonteaguapococomum: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    fonteaguarepresa: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    fonteaguario: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    manejopastagemadubacao: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    manejopastagemanalisedesolo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    manejopastagemcalagem: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    manejopastagemirrigacao: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ordenhamanual: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ordenhamecanica: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ordenhatanqueresfriamento: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    participacaoprojetoincentivo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    participacaoprojetoincentivoinstituicao: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    pastejocontinuo: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    pastejorotacionado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    principaisentraves: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    produtoscomercializadosbezerro: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    produtoscomercializadosboi: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    produtoscomercializadoscarneos: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    produtoscomercializadoscarneosdest: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    produtoscomercializadoslacteos: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    produtoscomercializadosleite: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    produtoscomercializadosnovilho: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    quantpessoas: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    quantproducaoleitedia: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    quantidadeordenha: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    quantidadepiquetes: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    reprodestacaomonta: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    reprodiatf: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    reprodinseminacaoartificial: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    reprodmontanatural: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    reprodtransferenciaembriao: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sistemacriacaoapasto: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sistemacriacaoconfinado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sistemacriacaosemiconfinado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    suplemalimentarconcentrado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    suplemalimentarsalmineral: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    suplemalimentarvolumoso: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    vacinaaftosa: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    vacinabrucelose: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    vacinaclostridiose: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    vacinaoutras: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    vacinaraiva: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bovinocultura',
    schema: 'prorural',
    timestamps: false
  });
};
