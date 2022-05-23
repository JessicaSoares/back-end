const db = require("../models");
const Tutorial = db.tutorials;
const FolhaPagamento = db.folhapagamento;
const AgriFamiliar = db.agrifamiliar;
const Op = db.Sequelize.Op;
const Credor = db.credor;
const Empregospormunicipio = db.empregospormunicipio;
const Empregosporsetor = db.empregosporsetor;
const Empregosporsexo = db.empregosporsexo;
const Pib = db.pib;
const Producaoagricola = db.producaoagricola;
const Producaoanimal = db.producaoanimal;
const Rebanhomunicipal = db.rebanhomunicipal;
const Aves = db.aves;
const Bovinos = db.bovinos;
const ProdutosCap = db.produtoscap;
const Exportacao = db.exportacao;
const Importacao = db.importacao;
const Saldo = db.saldo;
const Escolasalunos = db.escolasealunos;
const NotaIdeb = db.notaideb;
const Iluminacao = db.iluminacao;
const Agua = db.agua;
const Esgoto = db.esgoto;
const Lixo = db.lixo;
const Queimadas = db.queimadas;
const Demais = db.demais;
const Grandeporte = db.grandeporte;
const Medioporte = db.medioporte;
const Microempresa = db.microempresa;
const Naoinformado = db.naoinformado;
const Pequenoporte = db.pequenoporte;
const Despesaspessoal = db.despesaspessoal;
const Efetivados = db.efetivados;
const Comissionados = db.comissionados;
const Receita = db.receita;
const Despesa = db.despesa;
const Acidente = db.acidente;



const CsvParser = require("json2csv").Parser;

exports.download = (req, res) => {
  Tutorial.findAll().then((objs) => {
    let tutorials = [];

    objs.forEach((obj) => {
      const { ano, mes, grupo, setor, admitidos, desligados, saldo, estoque } = obj;
      tutorials.push({ ano, mes, grupo, setor, admitidos, desligados, saldo, estoque });
    });

    const csvFields = ["Ano", "mes", "grupo", "setor", "admitidos", "desligados", "saldo"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(tutorials);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=tutorials.csv");

    res.status(200).end(csvData);
  });
};

exports.downloaddefesas = (req, res) => {
  Queimadas.findAll().then((objs) => {
    let defesas = [];

    objs.forEach((obj) => {
      const { data, hora, duracao, endereco, bairro, muncipio, zona, natureza, danos_estruturais, area_afetada, status, lat, log } = obj;
      defesas.push({ data, hora, duracao, endereco, bairro, muncipio, zona, natureza, danos_estruturais, area_afetada, status, lat, log });
    });

    const csvFields = ["data", "hora", "duracao", "endereco", "bairro", "muncipio", "natureza", "danos_estruturais", "area_afetada", "status", "lat", "log"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(defesas);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=defesas.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadfolhapagamento = (req, res) => {
  FolhaPagamento.findAll().then((objs) => {
    let defesas = [];

    objs.forEach((obj) => {
      const { data, hora, duracao, endereco, bairro, muncipio, zona, natureza, danos_estruturais, area_afetada, status, lat, log } = obj;
      defesas.push({ data, hora, duracao, endereco, bairro, muncipio, zona, natureza, danos_estruturais, area_afetada, status, lat, log });
    });

    const csvFields = ["data", "hora", "duracao", "endereco", "bairro", "muncipio", "natureza", "danos_estruturais", "area_afetada", "status", "lat", "log"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(defesas);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=folhadepagamento.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadagrifamiliar = (req, res) => {
  AgriFamiliar.findAll().then((objs) => {
    let defesas = [];

    objs.forEach((obj) => {
      const { datanascimento, sexo, escolaridade, feirante } = obj;
      defesas.push({ datanascimento, sexo, escolaridade, feirante });
    });

    const csvFields = ["Data de Nascimento", "Sexo", "Escolaridade", "Feirante"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(defesas);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadocarmentarios = (req, res) => {
  Credor.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const { nome } = obj;
      credor.push({ nome });
    });

    const csvFields = ["nome"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadempregospormunicipio = (req, res) => {
  Empregospormunicipio.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const { ano, mes, admitidos, desligados, saldo, estoque } = obj;
      credor.push({ ano, mes, admitidos, desligados, saldo, estoque });
    });

    const csvFields = ["Ano", "Mês", "Admitidos", "Desligados", "Saldo", "Estoque"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv","filename=empregos_por_municipio.csv");
    res.setHeader("Content-Disposition", "attachment; filename=empregos_por_municipio.csv");

    res.status(200).end(csvData);
  });
};
exports.downloadempregosporsetor = (req, res) => {
  Empregosporsetor.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const { ano, mes, admitidos, desligados, saldo, estoque } = obj;
      credor.push({ ano, mes, admitidos, desligados, saldo, estoque });
    });

    const csvFields = ["Ano", "Mês", "Admitidos", "Desligados", "Saldo", "Estoque"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadempregosporsexo = (req, res) => {
  Empregosporsexo.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const { ano, mes, admitidos, desligados, saldo, estoque } = obj;
      credor.push({ ano, mes, admitidos, desligados, saldo, estoque });
    });

    const csvFields = ["Ano", "Mês", "Admitidos", "Desligados", "Saldo", "Estoque"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadaves = (req, res) => {
  Aves.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const { finalidadeavicultura, finalidadecorte, finalidadepostura } = obj;
      credor.push({ finalidadeavicultura, finalidadecorte, finalidadepostura });
    });

    const csvFields = ["Finalidade da Avicultura", "Finalidade do Corte", "Finalidade da Postura"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadbovinos = (req, res) => {
  Bovinos.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const { aptidaoleite, aptidaocorte, femeas0a12meses, femeas13a24meses, femeas25a36meses, femeasacimade36meses, machos0a12meses, machos13a24meses, machos25a36meses, machosacimade36meses } = obj;
      credor.push({ aptidaoleite, aptidaocorte, femeas0a12meses, femeas13a24meses, femeas25a36meses, femeasacimade36meses, machos0a12meses, machos13a24meses, machos25a36meses, machosacimade36meses });
    });

    const csvFields = ["Aptidão leite", "Aptidão corte", "Fêmeas de 0 a 12 meses", "Fêmeas de 13 a 24 meses", "Fêmeas de 25 a 36 meses", "Machos de 0 a 12 meses", "Machos de 13 a 24 meses", "Machos de 25 a 36 meses", "Machos acima de 36 meses"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadprodutoscap = (req, res) => {
  ProdutosCap.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const { ano, mes, admitidos, desligados, saldo, estoque } = obj;
      credor.push({ ano, mes, admitidos, desligados, saldo, estoque });
    });

    const csvFields = ["Ano", "Mês", "Admitidos", "Desligados", "Saldo", "Estoque"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};


exports.downloadempregos = (req, res) => {
  Credor.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const { nome } = obj;
      credor.push({ nome });
    });

    const csvFields = ["nome"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadpib = (req, res) => {
  Pib.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const { municipio, valor, ano, variavel } = obj;
      credor.push({ municipio, valor, ano, variavel });
    });

    const csvFields = ["Municipio", "Valor", "Ano", "Variável"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadproducaoanimal = (req, res) => {
  Producaoanimal.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const { ano, valor, municipio, produto } = obj;
      credor.push({ ano, valor, municipio, produto });
    });

    const csvFields = ["Ano", "Valor", "Município", "Produto"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadrebanhomunicipal = (req, res) => {
  Rebanhomunicipal.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const { valor, ano, variavel, tipo_rebanho, municipio } = obj;
      credor.push({ valor, ano, variavel, tipo_rebanho, municipio });
    });

    const csvFields = ["Valor", "Ano", "Variável", "Tipo de rebanho", "Municipio"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadproducaoagricola = (req, res) => {
  Producaoagricola.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const { ano, municipio, variavel, produto, quantidade } = obj;
      credor.push({ ano, municipio, variavel, produto, quantidade });
    });

    const csvFields = ["Ano", "Municipio", "Variavel", "Produto", "Quantidade"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadimportacao = (req, res) => {
  Importacao.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const { ano, municipio, descricao_sh2, valor_fob } = obj;
      credor.push({ ano, municipio, descricao_sh2, valor_fob });
    });

    const csvFields = ["Ano", "Municipio", "Descrição", "Valor"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadexportacao = (req, res) => {
  Exportacao.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const { ano, municipio, descricao_sh2, valor_fob } = obj;
      credor.push({ ano, municipio, descricao_sh2, valor_fob });
    });

    const csvFields = ["Ano", "Municipio", "Descrição", "Valor"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadsaldo = (req, res) => {
  Saldo.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const { ano, municipio, saldo, total_exportacao, total_importacao } = obj;
      credor.push({ ano, municipio, saldo, total_exportacao, total_importacao });
    });

    const csvFields = ["Ano", "Municipio", "Saldo", "Total de exportação", "Total de Importação"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadescolasealunos = (req, res) => {
  Escolasalunos.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const { ano, municipio, saldo, total_exportacao, total_importacao } = obj;
      credor.push({ ano, municipio, saldo, total_exportacao, total_importacao });
    });

    const csvFields = ["Ano", "Municipio", "Saldo", "Total de exportação", "Total de Importação"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};


exports.downloadnotaideb = (req, res) => {
  NotaIdeb.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const { municipio, ano, serie_ano, ideb } = obj;
      credor.push({ municipio, ano, serie_ano, ideb });
    });

    const csvFields = ["Município", "Ano", "Série/Ano", "Ideb"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadiluminacao = (req, res) => {
  Iluminacao.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const {bairro, tipo} = obj;
      credor.push({bairro, tipo});
    });

    const csvFields = ["Bairro", "Tipo"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadagua = (req, res) => {
  Agua.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const {municipio, ano , populacao_atendida_abastecimento, ligacoes_ativas, volume_agua_tratada_eta} = obj;
      credor.push({municipio, ano , populacao_atendida_abastecimento, ligacoes_ativas, volume_agua_tratada_eta} );
    });

    const csvFields = ["Município", "Ano", "População abastecida", "Ligações Ativas", "Volume de água tratada"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadesgoto = (req, res) => {
  Agua.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const {municipio, ano , populacao_atendida, volume_esgoto_coletado, volume_esgoto_tratado, populacao_atendida_urbana} = obj;
      credor.push({municipio, ano , populacao_atendida, volume_esgoto_coletado, volume_esgoto_tratado, populacao_atendida_urbana});
    });

    const csvFields = ["Município", "Ano", "População atendida", "Volume de esgoto coletado", "Volume de água tratada", "População Urbana atendida"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadlixo = (req, res) => {
  Lixo.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const {municipio, ano , populacao_atendida_coleta_domiciliar, servico} = obj;
      credor.push({municipio, ano , populacao_atendida_coleta_domiciliar, servico});
    });

    const csvFields = ["Município", "Ano", "População atendida", "servico"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};


exports.downloadpequenoporte = (req, res) => {
  Pequenoporte.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const {razao_social, ramo , bairro, ano_de_abertura,porte_da_empresa} = obj;
      credor.push( {razao_social, ramo ,bairro, ano_de_abertura, porte_da_empresa});
    });

    const csvFields = ["Razão Social", "Ramo", "Atividade", "Bairro", "Ano de Abertura", "Situação", "Porte", "Nome fantasia"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};



exports.downloadqueimadas = (req, res) => {
  Queimadas.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const {data, hora , duracao, endereco, bairro, muncipio,zona } = obj;
      credor.push({data, hora , duracao, endereco, bairro, muncipio,zona } );
    });

    const csvFields = ["Data", "Hora", "Duração", "Endereço", "Bairro", "Municipio", "Zona"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};




exports.downloadmedioporte = (req, res) => {
  Medioporte.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const {razao_social, ramo , bairro, ano_de_abertura,porte_da_empresa} = obj;
      credor.push( {razao_social, ramo ,bairro, ano_de_abertura, porte_da_empresa});
    });

    const csvFields = ["Razão Social", "Ramo", "Atividade", "Bairro", "Ano de Abertura", "Situação", "Porte", "Nome fantasia"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadmicroempresas = (req, res) => {
  Microempresa.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const {razao_social, ramo , bairro, ano_de_abertura,porte_da_empresa} = obj;
      credor.push( {razao_social, ramo ,bairro, ano_de_abertura, porte_da_empresa});
    });

    const csvFields = ["Razão Social", "Ramo", "Atividade", "Bairro", "Ano de Abertura", "Situação", "Porte", "Nome fantasia"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloaddemais = (req, res) => {
  Demais.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const {razao_social, ramo , bairro, ano_de_abertura,porte_da_empresa} = obj;
      credor.push( {razao_social, ramo ,bairro, ano_de_abertura, porte_da_empresa});
    });

    const csvFields = ["Razão Social", "Ramo", "Atividade", "Bairro", "Ano de Abertura", "Situação", "Porte", "Nome fantasia"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadgrandeporte = (req, res) => {
  Grandeporte.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const {razao_social, ramo , bairro, ano_de_abertura,porte_da_empresa} = obj;
      credor.push( {razao_social, ramo ,bairro, ano_de_abertura, porte_da_empresa});
    });

    const csvFields = ["Razão Social", "Ramo", "Atividade", "Bairro", "Ano de Abertura", "Situação", "Porte", "Nome fantasia"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadnaoinformado = (req, res) => {
  Naoinformado.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const {razao_social, ramo , bairro, ano_de_abertura,porte_da_empresa} = obj;
      credor.push( {razao_social, ramo ,bairro, ano_de_abertura, porte_da_empresa});
    });

    const csvFields = ["Razão Social", "Ramo", "Atividade", "Bairro", "Ano de Abertura", "Situação", "Porte", "Nome fantasia"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadmicroempresa = (req, res) => {
  Microempresa.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const {razao_social, ramo , bairro, ano_de_abertura,porte_da_empresa} = obj;
      credor.push( {razao_social, ramo ,bairro, ano_de_abertura, porte_da_empresa});
    });

    const csvFields = ["Razão Social", "Ramo", "Atividade", "Bairro", "Ano de Abertura", "Situação", "Porte", "Nome fantasia"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloaddespesaspessoal = (req, res) => {
  Despesaspessoal.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const {cargo, funcao , lotacao, setor} = obj;
      credor.push( {cargo, funcao , lotacao, setor});
    });

    const csvFields = ["Cargo", "Função", "Lotação", "Setor"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadcomissionados = (req, res) => {
  Comissionados.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const {cargo, funcao , lotacao, setor} = obj;
      credor.push( {cargo, funcao , lotacao, setor});
    });

    const csvFields = ["Cargo", "Função", "Lotação", "Setor"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadefetivados = (req, res) => {
  Efetivados.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const {cargo, funcao , lotacao, setor} = obj;
      credor.push( {cargo, funcao , lotacao, setor});
    });

    const csvFields = ["Cargo", "Função", "Lotação", "Setor"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadreceita = (req, res) => {
  Receita.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const {ano, especificacao , codigo, sum} = obj;
      credor.push( {ano, especificacao , codigo, sum});
    });

    const csvFields = ["ano", "especificacao" , "codigo", "sum"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloaddespesa = (req, res) => {
  Despesa.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const {ano, mes , orgao, elemento_despesa, despesa} = obj;
      credor.push( {ano, mes , orgao, elemento_despesa, despesa});
    });

    const csvFields = ["ano", "mes" , "orgao", "elemento_despesa", "despesa"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};

exports.downloadacidente = (req, res) => {
  Acidente.findAll().then((objs) => {
    let credor = [];

    objs.forEach((obj) => {
      const {nome, ano , tipo_acidente, severidade, condicao_tempo, sinalizacao_semaforica, sinalizacao_vertical, sinalizcao_horizontal,sexo,tipo_veiculo,idade} = obj;
      credor.push( {nome, ano , tipo_acidente, severidade, condicao_tempo, sinalizacao_semaforica, sinalizacao_vertical, sinalizcao_horizontal,sexo,tipo_veiculo,idade});
    });

    const csvFields = ["nome", "ano" , "tipo_acidente", "severidade", "condicao_tempo", "sinalizacao_semaforica", "sinalizacao_vertical", "sinalizcao_horizontal","sexo","tipo_veiculo","idade"];
    const csvParser = new CsvParser({ csvFields });
    const csvData = csvParser.parse(credor);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=agricultura_familiar.csv");

    res.status(200).end(csvData);
  });
};




// Create and Save a new Tutorial
exports.create = (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  // Valanoate request
  if (!req.body.grupo) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const tutorial = {
    grupo: req.body.grupo,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save Tutorial in the database
  Tutorial.create(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const grupo = req.query.grupo;
  var condition = grupo ? { grupo: { [Op.like]: `%${grupo}%` } } : null;

  Tutorial.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Tutorial with an ano
exports.findOne = (req, res) => {
  const ano = req.params.ano;

  Tutorial.findByPk(ano)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with ano=${ano}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with ano=" + ano
      });
    });
};

// Update a Tutorial by the ano in the request
exports.update = (req, res) => {
  const ano = req.params.ano;

  Tutorial.update(req.body, {
    where: { ano: ano }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with ano=${ano}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with ano=" + ano
      });
    });
};

// Delete a Tutorial with the specified ano in the request
exports.delete = (req, res) => {
  const ano = req.params.ano;

  Tutorial.destroy({
    where: { ano: ano }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with ano=${ano}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with ano=" + ano
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

// find all published Tutorial
exports.findAllPublished = (req, res) => {
  Tutorial.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
