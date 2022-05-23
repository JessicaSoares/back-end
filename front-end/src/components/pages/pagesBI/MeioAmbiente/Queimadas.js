import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { Component } from "react";
import TextSectionItem from "../TextSectionItem";
import NavMeioAmbiente from "./NavMeioAmbiente";
import Search from '../../../../components/Search';
import PortalDataService from "../../../services/portal.service";
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';
import ModalDownload from '../ModalDownload';

export default class MeioAmbiente extends Component {
  constructor(props) {
    super(props);

    this.downloadqueimadas = this.downloadqueimadas.bind(this);

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

  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index
    });
  }


  downloadqueimadas() {
    PortalDataService.downloadqueimadas()
      .then(response => {

        const rows = response.data;
        console.log(response.data);
        let csvContent = "data:text/csv;charset=utf-8,"
          + rows;
        var encodedUri = encodeURI(csvContent);
        window.open(encodedUri, "_Self");
        let settings = {
          fileName: 'MySpreadsheet', // Name of the resulting spreadsheet
          extraLength: 3, // A bigger number means that columns will be wider
          writeOptions: {} // Style options from https://github.com/SheetJS/sheetjs#writing-options
        }

        this.atualizarLista();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });

    PortalDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          defesas: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {

    const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state;
    const queimadas = () => {
      return this.downloadqueimadas
    }

    return (
      <>

        <Search details={initialDetails} />
        <Container>
          <Row>

            <Col sm={8}>
              <NavMeioAmbiente />
            </Col>
          </Row>
        </Container>
        <br /> <br />
        <TextSectionItem
          titlesection="Queimadas"
          textsection="A Defesa Civil de Parauapebas têm como objetivo articular um conjunto de medidas com a finalidade de prevenir e limitar os recursos, as perdas e os danos que estão sujeitos à população, em decorrência de calamidade pública e situação de emergência. Dentro de suas finalidades temos as queimadas que podem causar danos materiais e ambientais á população."
        />

        <div className="teste">

          <ModalDownload download1={queimadas} classeSecundaria1="show" titulo1="Queimadas"
            download2={queimadas} classeSecundaria2="hide" titulo2="Por setor"
            download3={queimadas} classeSecundaria3="hide " titulo3="Por município"
            download4={queimadas} classeSecundaria4="hide"
            download5={queimadas} classeSecundaria5="hide" />

        </div>

        <section class="page-section-sub-boxlegend " id="about">
          <Container>

            <ListarPaineis details={initialDetails} props="Queimadas" />
          </Container>
        </section>
      </>
    );
  }
}
