import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { Component } from "react";
import TextSectionItem from "../TextSectionItem";
import NavInfraestrutura from "./NavInfraestrutura";
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';
import ModalDownload from '../ModalDownload';
import Search from '../../../../components/Search';
import PortalDataService from "../../../services/portal.service";

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);

    this.downloadesgoto = this.downloadesgoto.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: "",

    };
  }


  componentDidMount() {
    this.retrieveTutorials();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveTutorials() {
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

  refreshList() {
    this.retrieveTutorials();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }

  downloadesgoto() {
    PortalDataService.downloadesgoto()
    .then(response => {

      const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "esgoto.csv");
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
    const esgoto = () => {
      return this.downloadesgoto // Chama a função de download dos dados download despesa
    }

    return (

      <>
        <Search details={initialDetails} />
        <Container>
          <Row>

            <Col sm={8}>
              <NavInfraestrutura />{/* Módulo que trás o submenu */}
            </Col>
          </Row>
        </Container>
        <br /> <br />

        <TextSectionItem
          titlesection="Esgoto"
          textsection="Esgoto é um sistema destinado a escoar e tratar os dejetos dos diversos aglomerados populacionais. Esses dejetos são a água proveniente do banho, limpeza de roupas, louças ou descarga do vaso sanitário. O Serviço Autônomo de Água e Esgoto de Parauapebas – SAAEP, fundado em 2009, após a criação da Lei n° 4.385, com o objetivo de desenvolver os serviços de saneamento na cidade de Parauapebas. É uma autarquia da administração indireta da Prefeitura Municipal de Parauapebas, cujo objetivo é promover os serviços de captação, tratamento e distribuição de água potável para a população do município. Os dados dos gráficos a seguir foram coletados da fonte SNIS, alimentados pelo SAAEP."
        /> {/* Módulo que recebe o  título e o texto daquele inidicador*/}

        <div className="teste">

          <ModalDownload download1={esgoto} classeSecundaria1="show" titulo1="Esgoto"
            download2={esgoto} classeSecundaria2="hide" titulo2="Por setor"
            download3={esgoto} classeSecundaria3="hide " titulo3="Por município"
            download4={esgoto} classeSecundaria4="hide"
            download5={esgoto} classeSecundaria5="hide" /> {/* Módulo que trás o modal de Download, recebe por parâmetro a função de download se é hide 
          ou show, ou seja se aparece ou não no select e o título que é o nome no select*/}

        </div>

        <section class="page-section-sub-boxlegend " id="about">
          <Container>

            <ListarPaineis details={initialDetails} props="Esgoto" /> {/* Módulo de busca que trás os painéis de acordo com a categoria*/}
          </Container>
        </section>
      </>
    );
  }
}
