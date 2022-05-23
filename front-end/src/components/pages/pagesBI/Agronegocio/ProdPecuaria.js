import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { Component } from "react";
import TextSectionItem from "../TextSectionItem";
import ListarPaineis from '../../../ListarPaineis';
import ModalDownload from '../ModalDownload';
import NavAgronegocio from "./NavAgronegocio";
import PortalDataService from "../../../services/portal.service";
import Search from '../../../../components/Search';
import initialDetails from '../../../../components/data/initialDetails';

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);

    this.downloadproducaoanimal = this.downloadproducaoanimal.bind(this);

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

  downloadproducaoanimal() {// Função que captura o json dos dados e faz o download em CSV
    PortalDataService.downloadproducaoanimal()
      .then(response => {

        const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "producaoanimal.csv");
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
    const producaoanimal = () => {
      return this.downloadproducaoanimal  // Chama a função de download dos dados download despesa
    }

    return (

      <>
        <Search details={initialDetails} />{/* Módulo de busca com filtro*/}
        <Container>
          <Row>

            <Col sm={8}>
              <NavAgronegocio /> {/* Módulo que trás o submenu de economia*/}
            </Col>
          </Row>
        </Container>
        <br /> <br />
        <TextSectionItem
          titlesection="Produção Pecuária Municipal"
          textsection="A pecuária é uma atividade econômica pertencente ao setor primário que diz respeito à criação de animais para a comercialização direta, para o fornecimento de matérias-primas empregadas em outros setores produtivos (como couros, lãs e peles) e, principalmente, para a produção de alimentos como carnes, leites, ovos e mel."
        />{/* Módulo que recebe o  título e o texto daquele inidicador*/}

        <div className="teste">

          <ModalDownload download1={producaoanimal} classeSecundaria1="show" titulo1="Produção Animal"
            download2={producaoanimal} classeSecundaria2="hide" titulo2="Rebanho Municipal"
            download3={producaoanimal} classeSecundaria3="hide " titulo3="Por município"
            download4={producaoanimal} classeSecundaria4="hide"
            download5={producaoanimal} classeSecundaria5="hide" />  {/* Módulo que trás o modal de Download, recebe por parâmetro a função de download se é hide 
          ou show, ou seja se aparece ou não no select e o título que é o nome no select*/}

        </div>

        <section class="page-section-sub-boxlegend " id="about">
          <Container>
            <ListarPaineis details={initialDetails} props="ProdPecuaria" /> {/* Módulo de busca que trás os painéis de acordo com a categoria*/}
          </Container>
        </section>
      </>
    );
  }
}


