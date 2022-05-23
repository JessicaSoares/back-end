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


    this.downloadreceita = this.downloadreceita.bind(this);


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


  downloadreceita() { // Função que captura o json dos dados e faz o download em CSV
    PortalDataService.downloaddespesa()
      .then(response => {

        const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "receita.csv");
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
    const receita = () => {
      return this.downloadreceita // Chama a função de download dos dados
    }


    return (

      <>
        <Search details={initialDetails} /> {/* Módulo de busca com filtro*/}
        <Container>
          <Row>

            <Col sm={8}>
              <NavEconomia /> {/* Módulo que trás o submenu de economia*/}
            </Col>
          </Row>
        </Container>
        <br /> <br />
        <TextSectionItem
          titlesection="Receitas"
          textsection="Receita é um termo utilizado pela contabilidade para evidenciar a variação positiva da situação líquida patrimonial resultante do aumento de ativos ou da redução de passivos de uma entidade. A receita pública consiste em todos os ingressos disponíveis para cobertura das despesas públicas, em qualquer esfera governamental."
        /> {/* Módulo que recebe o  título e o texto daquele inidicador*/}
        <div className="teste">

          <ModalDownload download1={receita} classeSecundaria1="show" titulo1="Receitas"
            download2={receita} classeSecundaria2="hide" titulo2="Por setor"
            download3={receita} classeSecundaria3="hide " titulo3="Por município"
            download4={receita} classeSecundaria4="hide"
            download5={receita} classeSecundaria5="hide" />  {/* Módulo que trás o modal de Download, recebe por parâmetro a função de download se é hide 
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