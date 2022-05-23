import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { Component } from "react";
import TextSectionItem from "../TextSectionItem";
import NavEconomia from "./NavEconomia";
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';
import ModalDownload from '../ModalDownload';
import Search from '../../../../components/Search';
import PortalDataService from "../../../services/portal.service";

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);

    this.downloadexportacao = this.downloadexportacao.bind(this);
    this.downloadimportacao = this.downloadimportacao.bind(this);
    this.downloadsaldo = this.downloadsaldo.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: "",

    };
  }

  componentDidMount() {
    this.recuperarDados();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  recuperarDados() {
    PortalDataService.getAll()
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  atualizarLista() {
    this.recuperarDados();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }

  downloadexportacao() {  // Função que captura o json dos dados e faz o download em CSV
    PortalDataService.downloadexportacao()
      .then(response => {

        const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "exportacao.csv");
      document.body.appendChild(link);
      link.click();
      this.atualizarLista();
      })
      .catch(e => {
        console.log(e);
      });
  }

  downloadimportacao() {  // Função que captura o json dos dados e faz o download em CSV
    PortalDataService.downloadimportacao()
      .then(response => {

        const linhas = response.data; // Linhas reccebe os dados do JSON
        console.log(response.data); // Mostra no console os dados do JSON
        let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
          + linhas;
        var encodedUri = encodeURI(csvContent); 
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "importacao.csv");
        document.body.appendChild(link);
        link.click();
        this.atualizarLista();
      })
      .catch(e => {
        console.log(e);
      });
  }

  downloadsaldo() {  // Função que captura o json dos dados e faz o download em CSV
    PortalDataService.downloadsaldo()
      .then(response => {

        const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "saldo.csv");
      document.body.appendChild(link);
      link.click();
      this.atualizarLista();
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {

    const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state;
    const importacao = () => {
      return this.downloadimportacao // Chama a função de download dos dados 
    }
    const exportacao = () => {
      return this.downloadexportacao // Chama a função de download dos dados 
    }
    const saldo = () => {
      return this.downloadsaldo  // Chama a função de download dos dados 
    }

    return (
      <>
        <Search details={initialDetails} /> {/* Módulo de busca com filtro*/}
        <Container>
          <Row>

            <Col sm={8}>
              <NavEconomia />{/* Módulo que trás o submenu de economia*/}
            </Col>
          </Row>
        </Container>
        <br /> <br />
        <TextSectionItem
          titlesection="Balança Comercial"
          textsection="Balança comercial se refere ao conjunto de tudo o que é importado e exportado entre os países, ou seja, a diferença entre os valores das exportações e das importações de um país em um certo período, revelando se a nação é compradora ou vendedora nos mercados mundiais de bens e serviços."
        />{/* Módulo que recebe o  título e o texto daquele inidicador*/}
        <div className="teste">
          <ModalDownload download1={importacao} classeSecundaria1="show" titulo1="Importação"
            download2={exportacao} classeSecundaria2="show" titulo2="Exportação"
            download3={saldo} classeSecundaria3="show " titulo3="Saldo"
            download4={saldo} classeSecundaria4="hide"
            download5={saldo} classeSecundaria5="hide" /> {/* Módulo que trás o modal de Download, recebe por parâmetro a função de download se é hide 
          ou show, ou seja se aparece ou não no select e o título que é o nome no select*/}
        </div>

        <section class="page-section-sub-boxlegend " id="about">
          <Container>
            <ListarPaineis details={initialDetails} props="BalancaComercial" /> {/* Módulo de busca que trás os painéis de acordo com a categoria*/}
          </Container>
        </section>
      </>
    );
  }
}
