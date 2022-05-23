const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuaria', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    qual_atividade_fisica_gostaria_de_fazer: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    a_lesao_foi_auto_provocada: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    a_violencia_ocorreu_outras_vezes: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    agressor_suspeito_de_uso_de_alcool: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ano_escolar: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    bairro: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    banheiro: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    beneficiaria_programa_social: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    beneficiodeprestacaocontinuada: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    beneficiossociaiseventuais: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    bolsafamilia: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    como_soube_do_curso: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    complemento: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    condicoes_de_moradia: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    condicoes_socio_economicas: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    cpf: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    daacessoriainstitucionalcomequipe: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    dachefiacomequipe: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    dacsafcomequipe: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    daequipetecnica: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    dasparcerias: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    data_de_nascimento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    doatendimento: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    escolaridade: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    esta_fazendo_prenatal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    esta_gravida: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    estado_civil: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    estrutura_da_moradia: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    faz_acompanhamento_outras_entidades: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    faz_uso_de_medicamento_controlado: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    fez_curso_na_casa_mulher: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    fez_pre_natal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    gostaria_de_realizar_alguma_atividade_fisica: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    houve_registro_de_ocorrencia_policial: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    idade: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    idade_do_possivel_agressor: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    ja_fez_algum_curso_profissionalizante: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ja_recebeu_atendimento_semmu: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ja_teve_algum_aborto: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    local_da_possivel_agressao: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    local_de_moradia: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    logradouro: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    naturalidade: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    necessidade_inicial: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nome: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nome_da_mae: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    numero: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    numero_de_filhos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    numero_de_gestacoes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    numero_de_moradores: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    numero_de_moradores_que_trabalham: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    'numero_de_pessoas_envolvidas_na_agresão': {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    o_aborto_foi_devido_violencia_sofrida: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    orgao_emissor: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    orientacao_sexual: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    origem_da_demanda: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    outra_condicao_de_moradia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    outra_estrutura_de_moradia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    outro_tipo_de_banheiro: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    outro_tipo_de_moradia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    outro_tipo_de_telhado: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    outro_vinculo_com_o_agressor: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    pendencia_de_documentos: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    pessoa_que_realiza_o_trabalho_domestico: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    possui_algum_problema_de_saude: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    possui_interesse_em_fazer_curso: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    possuia_vinculo_com_o_agressor: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    profissao: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    quais_beneficios_sociais_eventuais: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    quais_cursos_realizou: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    quais_documentos: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    quais_entidades: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    qual_atendimento_ja_teve_da_semmu: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    qual_atividade_fisica_realiza: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    qual_conselho: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    qualcurso: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    qual_curso_deseja_fazer: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    qual_curso_profissionalizante_fez: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    qual_medicamento_controlado_utiliza: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    qual_orgao_lhe_encaminhou: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    qual_problema_de_saude_possui: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    qual_programa_social_participa: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    qual_sua_expectatica_do_curso: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    qual_tipo_de_violencia_sofreu: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    qual_tj: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    qual_vinculo_com_o_agressor: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    quando_sofreu_a_violencia: {
      type: DataTypes.DATE,
      allowNull: true
    },
    quantas_ocorrencias_registrou: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    que_horas_sofreu_a_violencia: {
      type: DataTypes.DATE,
      allowNull: true
    },
    quem_realiza_o_trabalho_domestico: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    raca_cor: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    realiza_alguma_atividade_fisica: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    relacao: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    religiao: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    renda_familiar: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    renda_mensal: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    rg: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    secao: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    situacao_escolar: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sofreu_ou_sofre_algum_tipo_de_violencia: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    telefone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    tem_alguma_deficiencia: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    tempo_de_convivencia: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    tempo_de_moradia: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tempo_no_municipio: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tipo_de_deficiencia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tipo_de_moradia: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tipo_de_telhado: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    titulo_de_eleitor: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    trabalha_com_cart_assinada: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    uf: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ultima_cidade_que_residiu: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    valor_programa_social: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    vem_encaminhada_de_outro_orgao: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    vinculo_empregaticio: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    whatsapp: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    zona: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ocupacao_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cep: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    municipio: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    telefone2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    deficienciaauditiva: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    deficienciafisica: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    deficienciamental: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    deficienciavisual: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    outrasdeficiencias: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    como_soube_da_oficina: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    nacionalidade: {
      type: DataTypes.STRING(30),
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
    outro_bairro: {
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
    esteticacurso: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    esteticaoficina: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    possui_interesse_em_fazer_oficina: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    telefone_recado: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    outrasviolencias: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    violenciafisica: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    violenciamoral: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    violenciapatrimonial: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    violenciapsicologica: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    violenciasexual: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    violenciavirtual: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    deficienciaintelectual: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    financeiraeconomica: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    intervencaolegal: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    negligenciaabandono: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    outras_deficiencias: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    outras_violencias: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    psicologicamoral: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    tortura: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    trabalhoinfantil: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    traficohumano: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    transtornodecomportamento: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    uf_residencia: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    moral: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    psicologica: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    numero_de_pessoas_envolvidas_na_agressao: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    qualcras: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    qual_origem: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    quem_cadastrou: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    secretaria_setor: {
      type: DataTypes.STRING(80),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usuaria',
    schema: 'sis_mulher',
    timestamps: false
  });
};
