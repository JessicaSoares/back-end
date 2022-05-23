import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { Component } from "react";
import TextSectionItem from "../TextSectionItem";
import NavEconomia from "./NavEconomia";
import Search from '../../../../components/Search';
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';
import ModalDownload from '../ModalDownload';
import PortalDataService from "../../../services/portal.service";

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);

    this.downloadpib = this.downloadpib.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: ""
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


  downloadpib() { // Função que captura o json dos dados e faz o download em CSV
    PortalDataService.downloadpib()
      .then(response => {

        const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "pib.csv");
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
    const pib = () => {
      return this.downloadpib // Chama a função de download dos dados download despesa
    }
  

    return (

      <>
        <Search details={initialDetails} />  {/* Módulo de busca com filtro*/}
        <Container>
          <Row>

            <Col sm={8}>
              <NavEconomia /> {/* Módulo que trás o submenu de economia*/}
            </Col>
          </Row>
        </Container>
        <br /> <br />
        <TextSectionItem
          titlesection="PIB"
          textsection="PIB é a soma de todos os bens e serviços finais produzidos por um país, estado ou cidade, geralmente em um ano."
        />  {/* Módulo que recebe o  título e o texto daquele inidicador*/}

        <div className="teste">

          <ModalDownload download1={pib} classeSecundaria1="show" titulo1="Pib"
            download2={pib} classeSecundaria2="hide" titulo2="Por setor"
            download3={pib} classeSecundaria3="hide " titulo3="Por município"
            download4={pib} classeSecundaria4="hide"
            download5={pib} classeSecundaria5="hide" />{/* Módulo que trás o modal de Download, recebe por parâmetro a função de download se é hide 
          ou show, ou seja se aparece ou não no select e o título que é o nome no select*/}

        </div>

        <section class="page-section-sub-boxlegend " id="about">
          <Container>

            <ListarPaineis details={initialDetails} props="PIB" /> {/* Módulo de busca que trás os painéis de acordo com a categoria*/}
          </Container>
        </section>
      </>
    );
  }
}
