var DataTypes = require("sequelize").DataTypes;
var _Agricultura Familiar = require("./Agricultura Familiar");
var _Aves = require("./Aves");
var _Bovinos = require("./Bovinos");
var _PIB = require("./PIB");
var _Produtos Cap = require("./Produtos Cap");
var _Produção Animal = require("./Produção Animal");
var _Rebanho Municipal = require("./Rebanho Municipal");
var _agricultura_familiar = require("./agricultura_familiar");
var _atendimento = require("./atendimento");
var _aves = require("./aves");
var _bovinocultura = require("./bovinocultura");
var _categoria = require("./categoria");
var _credor = require("./credor");
var _customers = require("./customers");
var _docentes_curso_superior = require("./docentes_curso_superior");
var _elemento_despesa = require("./elemento_despesa");
var _empregos_por_municipio = require("./empregos_por_municipio");
var _empregos_por_municipio = require("./empregos_por_municipio");
var _empregos_por_setor = require("./empregos_por_setor");
var _empregos_por_sexo = require("./empregos_por_sexo");
var _empresas_jucepa = require("./empresas_jucepa");
var _escolas_e_alunos = require("./escolas_e_alunos");
var _exercicio = require("./exercicio");
var _exportacao = require("./exportacao");
var _folha_pagamento = require("./folha_pagamento");
var _folha_pagamento_teste = require("./folha_pagamento_teste");
var _fonte = require("./fonte");
var _ibge_pam = require("./ibge_pam");
var _iluminacao = require("./iluminacao");
var _importacao = require("./importacao");
var _indicador = require("./indicador");
var _movimentacao_de_emprego_caged = require("./movimentacao_de_emprego_caged");
var _municipio = require("./municipio");
var _nota_ideb_municipio = require("./nota_ideb_municipio");
var _ocupacao = require("./ocupacao");
var _orgaos = require("./orgaos");
var _pagamento_despesas = require("./pagamento_despesas");
var _pagamento_despesas_teste = require("./pagamento_despesas_teste");
var _personagens = require("./personagens");
var _pib = require("./pib");
var _ppm_efetivo_de_rebanho = require("./ppm_efetivo_de_rebanho");
var _ppm_producao_animal = require("./ppm_producao_animal");
var _produtos_cap = require("./produtos_cap");
var _queimadas = require("./queimadas");
var _rebanho_bovino = require("./rebanho_bovino");
var _receita = require("./receita");
var _receita_prevista_arrecada = require("./receita_prevista_arrecada");
var _saldo = require("./saldo");
var _snis_agua = require("./snis_agua");
var _snis_esgoto = require("./snis_esgoto");
var _snis_residuo_solido = require("./snis_residuo_solido");
var _teste = require("./teste");
var _teste = require("./teste");
var _teste = require("./teste");
var _testee = require("./testee");
var _tutorials = require("./tutorials");
var _usuaria = require("./usuaria");
var _view_producao_agricola = require("./view_producao_agricola");

function initModels(sequelize) {
  var Agricultura Familiar = _Agricultura Familiar(sequelize, DataTypes);
  var Aves = _Aves(sequelize, DataTypes);
  var Bovinos = _Bovinos(sequelize, DataTypes);
  var PIB = _PIB(sequelize, DataTypes);
  var Produtos Cap = _Produtos Cap(sequelize, DataTypes);
  var Produção Animal = _Produção Animal(sequelize, DataTypes);
  var Rebanho Municipal = _Rebanho Municipal(sequelize, DataTypes);
  var agricultura_familiar = _agricultura_familiar(sequelize, DataTypes);
  var atendimento = _atendimento(sequelize, DataTypes);
  var aves = _aves(sequelize, DataTypes);
  var bovinocultura = _bovinocultura(sequelize, DataTypes);
  var categoria = _categoria(sequelize, DataTypes);
  var credor = _credor(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var docentes_curso_superior = _docentes_curso_superior(sequelize, DataTypes);
  var elemento_despesa = _elemento_despesa(sequelize, DataTypes);
  var empregos_por_municipio = _empregos_por_municipio(sequelize, DataTypes);
  var empregos_por_municipio = _empregos_por_municipio(sequelize, DataTypes);
  var empregos_por_setor = _empregos_por_setor(sequelize, DataTypes);
  var empregos_por_sexo = _empregos_por_sexo(sequelize, DataTypes);
  var empresas_jucepa = _empresas_jucepa(sequelize, DataTypes);
  var escolas_e_alunos = _escolas_e_alunos(sequelize, DataTypes);
  var exercicio = _exercicio(sequelize, DataTypes);
  var exportacao = _exportacao(sequelize, DataTypes);
  var folha_pagamento = _folha_pagamento(sequelize, DataTypes);
  var folha_pagamento_teste = _folha_pagamento_teste(sequelize, DataTypes);
  var fonte = _fonte(sequelize, DataTypes);
  var ibge_pam = _ibge_pam(sequelize, DataTypes);
  var iluminacao = _iluminacao(sequelize, DataTypes);
  var importacao = _importacao(sequelize, DataTypes);
  var indicador = _indicador(sequelize, DataTypes);
  var movimentacao_de_emprego_caged = _movimentacao_de_emprego_caged(sequelize, DataTypes);
  var municipio = _municipio(sequelize, DataTypes);
  var nota_ideb_municipio = _nota_ideb_municipio(sequelize, DataTypes);
  var ocupacao = _ocupacao(sequelize, DataTypes);
  var orgaos = _orgaos(sequelize, DataTypes);
  var pagamento_despesas = _pagamento_despesas(sequelize, DataTypes);
  var pagamento_despesas_teste = _pagamento_despesas_teste(sequelize, DataTypes);
  var personagens = _personagens(sequelize, DataTypes);
  var pib = _pib(sequelize, DataTypes);
  var ppm_efetivo_de_rebanho = _ppm_efetivo_de_rebanho(sequelize, DataTypes);
  var ppm_producao_animal = _ppm_producao_animal(sequelize, DataTypes);
  var produtos_cap = _produtos_cap(sequelize, DataTypes);
  var queimadas = _queimadas(sequelize, DataTypes);
  var rebanho_bovino = _rebanho_bovino(sequelize, DataTypes);
  var receita = _receita(sequelize, DataTypes);
  var receita_prevista_arrecada = _receita_prevista_arrecada(sequelize, DataTypes);
  var saldo = _saldo(sequelize, DataTypes);
  var snis_agua = _snis_agua(sequelize, DataTypes);
  var snis_esgoto = _snis_esgoto(sequelize, DataTypes);
  var snis_residuo_solido = _snis_residuo_solido(sequelize, DataTypes);
  var teste = _teste(sequelize, DataTypes);
  var teste = _teste(sequelize, DataTypes);
  var teste = _teste(sequelize, DataTypes);
  var testee = _testee(sequelize, DataTypes);
  var tutorials = _tutorials(sequelize, DataTypes);
  var usuaria = _usuaria(sequelize, DataTypes);
  var view_producao_agricola = _view_producao_agricola(sequelize, DataTypes);

  indicador.belongsTo(categoria, { as: "categorium", foreignKey: "categoria_id"});
  categoria.hasMany(indicador, { as: "indicadors", foreignKey: "categoria_id"});
  indicador.belongsTo(fonte, { as: "fonte", foreignKey: "fonte_id"});
  fonte.hasMany(indicador, { as: "indicadors", foreignKey: "fonte_id"});

  return {
    Agricultura Familiar,
    Aves,
    Bovinos,
    PIB,
    Produtos Cap,
    Produção Animal,
    Rebanho Municipal,
    agricultura_familiar,
    atendimento,
    aves,
    bovinocultura,
    categoria,
    credor,
    customers,
    docentes_curso_superior,
    elemento_despesa,
    empregos_por_municipio,
    empregos_por_municipio,
    empregos_por_setor,
    empregos_por_sexo,
    empresas_jucepa,
    escolas_e_alunos,
    exercicio,
    exportacao,
    folha_pagamento,
    folha_pagamento_teste,
    fonte,
    ibge_pam,
    iluminacao,
    importacao,
    indicador,
    movimentacao_de_emprego_caged,
    municipio,
    nota_ideb_municipio,
    ocupacao,
    orgaos,
    pagamento_despesas,
    pagamento_despesas_teste,
    personagens,
    pib,
    ppm_efetivo_de_rebanho,
    ppm_producao_animal,
    produtos_cap,
    queimadas,
    rebanho_bovino,
    receita,
    receita_prevista_arrecada,
    saldo,
    snis_agua,
    snis_esgoto,
    snis_residuo_solido,
    teste,
    teste,
    teste,
    testee,
    tutorials,
    usuaria,
    view_producao_agricola,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
