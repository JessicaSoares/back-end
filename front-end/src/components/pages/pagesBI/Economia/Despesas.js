import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { Component } from "react";
import TextSectionItem from "../TextSectionItem";
import NavEconomia from "./NavEconomia";
import Search from '../../../../components/Search';
import PortalDataService from "../../../services/portal.service";
import ListarPaineis from '../../../ListarPaineis';
import ModalDownload from '../ModalDownload';
import initialDetails from '../../../data/initialDetails';

export default class Despesas extends Component {
  constructor(props) {
    super(props);

    this.downloaddespesa = this.downloaddespesa.bind(this);

    this.state = {
      dados: [],
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
          dados: response.data
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

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index
    });
  }

  downloaddespesa() {  // Função que captura o json dos dados e faz o download em CSV
    PortalDataService.downloaddespesa()
      .then(response => {

        const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "despesas.csv");
      document.body.appendChild(link);
      link.click();
      this.atualizarLista();
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {

    const { searchTitle, dados, currentTutorial, currentIndex } = this.state;
    const despesa = () => {
      return this.downloaddespesa // Chama a função de download dos dados download despesa
    }

    return (
      <>
        <Search details={initialDetails} />  {/* Módulo de busca com filtro*/}
        <Container>
          <Row>
            <Col sm={8}>
              <NavEconomia />{/* Módulo que trás o submenu de economia*/}
            </Col>
          </Row>
        </Container>
        <br /> <br />
        <TextSectionItem
          titlesection="Despesas"
          textsection="Despesa, ato ou efeito de desembolsar dinheiro em compras, doações, obrigações etc, ou seja todo o gasto de caráter geral, relacionado com a administração e vendas, exemplo: material de escritório."
        />   {/* Módulo que recebe o  título e o texto daquele inidicador*/}

        <div className="teste">
          <ModalDownload download1={despesa} classeSecundaria1="show" titulo1="Despesas"
            download2={despesa} classeSecundaria2="hide" titulo2="Comissionados"
            download3={despesa} classeSecundaria3="hide " titulo3="Efetivados"
            download4={despesa} classeSecundaria4="hide"
            download5={despesa} classeSecundaria5="hide" />   {/* Módulo que trás o modal de Download, recebe por parâmetro a função de download se é hide 
            ou show, ou seja se aparece ou não no select e o título que é o nome no select*/}
        </div>

        <section class="page-section-sub-boxlegend " id="about">
          <Container>
            <ListarPaineis details={initialDetails} props="Despesas" /> {/* Módulo de busca que trás os painéis de acordo com a categoria*/}
          </Container>
        </section>

      </>
    );
  }
}
