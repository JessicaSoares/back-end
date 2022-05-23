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

    this.downloaddespesaspessoal = this.downloaddespesaspessoal.bind(this);
    this.downloadcomissionados = this.downloadcomissionados.bind(this);
    this.downloadefetivados = this.downloadefetivados.bind(this);


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
    this.retrieveTutorials();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }

  downloaddespesaspessoal() {
    PortalDataService.downloaddespesaspessoal()
      .then(response => {

        const linhas = response.data; // Linhas reccebe os dados do JSON
        console.log(response.data); // Mostra no console os dados do JSON
        let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
          + linhas;
        var encodedUri = encodeURI(csvContent); 
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "despesaspessoal.csv");
        document.body.appendChild(link);
        link.click();
        this.atualizarLista();
      })
      .catch(e => {
        console.log(e);
      });
  }

  downloadcomissionados() {
    PortalDataService.downloadcomissionados()
      .then(response => {

        const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "comissionados.csv");
      document.body.appendChild(link);
      link.click();
      this.atualizarLista();
      })
      .catch(e => {
        console.log(e);
      });
  }

  downloadefetivados() {
    PortalDataService.downloadefetivados()
      .then(response => {

        const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "efetivados.csv");
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
    const contratados = () => {
      return this.downloaddespesaspessoal // Chama a função de download dos dados 
    }
    const comissionados = () => {
      return this.downloadcomissionados // Chama a função de download dos dados 
    }
    const efetivados = () => {
      return this.downloadefetivados // Chama a função de download dos dados 
    }

    return (

      <>

        <Search details={initialDetails} />{/* Módulo de busca com filtro*/}
        <Container>
          <Row>

            <Col sm={8}>
              <NavEconomia /> {/* Módulo que trás o submenu de econônomia*/}
            </Col>
          </Row>
        </Container>
        <br /> <br />
        <TextSectionItem
          titlesection="Despesa com Pessoal"
          textsection="Despesa com pessoal é todo e qualquer recurso consumido ou aplicado pela entidade na remuneração direta ou indireta de seus funcionários. Também são despesas com pessoal os encargos sociais previstos em lei e os benefícios oferecidos espontaneamente, ou concedidos em razão de previsão legal, de acordos firmados entre empregador e empregados ou de decisões judiciais."
        />{/* Módulo que recebe o  título e o texto daquele inidicador*/}

        <div className="teste">

          <ModalDownload download1={contratados} classeSecundaria1="show" titulo1="Contratados"
            download2={comissionados} classeSecundaria2="show" titulo2="Comissionados"
            download3={efetivados} classeSecundaria3="show " titulo3="Efetivados"
            download4={efetivados} classeSecundaria4="hide"
            download5={efetivados} classeSecundaria5="hide" />
          {/* Módulo que trás o modal de Download, recebe por parâmetro a função de download se é hide 
            ou show, ou seja se aparece ou não no select e o título que é o nome no select*/}

        </div>


        <section class="page-section-sub-boxlegend " id="about">
          <Container>

            <ListarPaineis details={initialDetails} props="DespsPessoal" /> {/* Módulo de busca que trás os painéis de acordo com a categoria*/}
          </Container>
        </section>
      </>
    );
  }
}
