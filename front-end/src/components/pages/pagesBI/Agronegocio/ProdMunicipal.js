import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { Component } from "react";
import TextSectionItem from "../TextSectionItem";
import Search from '../../../../components/Search';
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';
import ModalDownload from '../ModalDownload';
import NavAgronegocio from "./NavAgronegocio";
import PortalDataService from "../../../services/portal.service";

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);

    this.downloadproducaoagricola = this.downloadproducaoagricola.bind(this);

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

  recuperarDados() { // Função que captura o json dos dados e faz o download em CSV
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


  downloadproducaoagricola() {
    PortalDataService.downloadproducaoagricola()
      .then(response => {

        const linhas = response.data; // Linhas reccebe os dados do JSON
        console.log(response.data); // Mostra no console os dados do JSON
        let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
          + linhas;
        var encodedUri = encodeURI(csvContent); 
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "producaoagricolamunicipal.csv");
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
    const producaoagricola = () => {
      return this.downloadproducaoagricola // Chama a função de download dos dados download despesa
    }

    return (

      <>
        <Search details={initialDetails} />{ /* Módulo de busca com filtro*/}
        <Container>
          <Row>
            <Col sm={8}>
              <NavAgronegocio /> {/* Módulo que trás o submenu*/}
            </Col>
          </Row>
        </Container>
        <br /> <br />
        <TextSectionItem
          titlesection="Produção Agrícola Municipal"
          textsection=" A Produção Agrícola Municipal é um conjunto de produtos das lavouras temporárias e permanentes do município que se caracterizam não só pela grande importância econômica que possuem na pauta de exportações, como também por sua relevância social, componentes que são da cesta básica do cidadão."
        /> {/* Módulo que recebe o  título e o texto daquele inidicador*/}

        <div className="teste">

          <ModalDownload download1={producaoagricola} classeSecundaria1="show" titulo1="Produção agrícola municipal"
            download2={producaoagricola} classeSecundaria2="hide" titulo2="Por setor"
            download3={producaoagricola} classeSecundaria3="hide " titulo3="Por município"
            download4={producaoagricola} classeSecundaria4="hide"
            download5={producaoagricola} classeSecundaria5="hide" />    {/* Módulo que trás o modal de Download, recebe por parâmetro a função de download se é hide 
          ou show, ou seja se aparece ou não no select e o título que é o nome no select*/}

        </div>

        <section class="page-section-sub-boxlegend " id="about">
          <Container>

            <ListarPaineis details={initialDetails} props="ProdMunicipal" /> {/* Módulo de busca que trás os painéis de acordo com a categoria*/}
          </Container>
        </section>
      </>
    );
  }
}


