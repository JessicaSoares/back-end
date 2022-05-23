const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.defesas = require("./defesa.model.js")(sequelize, Sequelize);
db.folhapagamento = require("./folhapagamento.model.js")(sequelize, Sequelize);
db.agrifamiliar = require("./agrifamiliar.model.js")(sequelize, Sequelize);
db.credor = require("./credor.model.js")(sequelize, Sequelize);
db.empregospormunicipio = require("./empregos_por_municipio.model.js")(sequelize, Sequelize);
db.empregosporsetor = require("./empregos_por_setor.model.js")(sequelize, Sequelize);
db.empregosporsexo = require("./empregos_por_sexo.model.js")(sequelize, Sequelize);
db.pib = require("./pib.model.js")(sequelize, Sequelize);
db.producaoagricola = require("./view_producao_agricola.model.js")(sequelize, Sequelize);
db.producaoanimal = require("./producao_animal.model.js")(sequelize, Sequelize);
db.rebanhomunicipal = require("./rebanho_municipal.model.js")(sequelize, Sequelize);
db.aves = require("./aves.model.js")(sequelize, Sequelize);
db.bovinos = require("./bovinos.model.js")(sequelize, Sequelize);
db.produtoscap = require("./produtos_cap.model.js")(sequelize, Sequelize);
db.importacao = require("./importacao.model.js")(sequelize, Sequelize);
db.exportacao = require("./exportacao.model.js")(sequelize, Sequelize);
db.saldo = require("./saldo.model.js")(sequelize, Sequelize);
db.escolasealunos = require("./escolas_e_alunos.model.js")(sequelize, Sequelize);
db.notaideb = require("./nota_ideb_municipio.model.js")(sequelize, Sequelize);
db.iluminacao = require("./iluminacao.model.js")(sequelize, Sequelize);
db.receita = require("./receita_model.js")(sequelize, Sequelize);
db.agua = require("./snis_agua.model.js")(sequelize, Sequelize);
db.esgoto = require("./snis_esgoto.model.js")(sequelize, Sequelize);
db.lixo = require("./snis_residuo_solido.model.js")(sequelize, Sequelize);
db.queimadas = require("./queimadas.model.js")(sequelize, Sequelize);
db.empresas = require("./empresas_jucepa.model.js")(sequelize, Sequelize);
db.pequenoporte = require("./pequenoporte.model.js")(sequelize, Sequelize);
db.medioporte = require("./medioporte.model.js")(sequelize, Sequelize);
db.grandeporte = require("./grandeporte.model.js")(sequelize, Sequelize);
db.demais = require("./demais.model.js")(sequelize, Sequelize);
db.naoinformado = require("./naoinformado.model.js")(sequelize, Sequelize);
db.microempresa = require("./microempresa.model.js")(sequelize, Sequelize);
db.despesaspessoal = require("./despesaspessoal.model.js")(sequelize, Sequelize);
db.comissionados = require("./comissionado.model.js")(sequelize, Sequelize);
db.efetivados = require("./efetivados.model.js")(sequelize, Sequelize);
db.despesa = require("./despesa.model.js")(sequelize, Sequelize);
db.acidente = require("./acidente.model.js")(sequelize, Sequelize);


module.exports = db;
