import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { Component } from "react";
import TextSectionItem from "../TextSectionItem";
import Search from '../../../Search';
import PortalDataService from "../../../services/portal.service";
import ListarPaineis from '../../../ListarPaineis';
import ModalDownload from '../ModalDownload';
import initialDetails from '../../../data/initialDetails';


export default class Despesas extends Component {
  constructor(props) {
    super(props);

    this.downloadacidente = this.downloadacidente.bind(this);

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

refreshList() {
  this.recuperarDados();
  this.setState({
    currentTutorial: null,
    currentIndex: -1
  });
}

  downloadacidente() {
    PortalDataService.downloadacidente()
      .then(response => {

        const rows = response.data;
        console.log(response.data);
        let csvContent = "data:text/csv;charset=utf-8,"
          + rows;
        var encodedUri = encodeURI(csvContent);
        window.open(encodedUri);
        let settings = {
          fileName: 'MySpreadsheet', // Name of the resulting spreadsheet
          extraLength: 3, // A bigger number means that columns will be wider
          writeOptions: {} // Style options from https://github.com/SheetJS/sheetjs#writing-options
        }


        this.refreshList();
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
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {

    const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state;
    const acidentes = () => {
      return this.downloadacidente
    }

    return (
      <>
        <Search details={initialDetails} />
        <Container>
          <Row>
            <Col sm={8}>
            </Col>
          </Row>
        </Container>
        <br /> <br />
        <TextSectionItem
          titlesection="Turismo"
          textsection=""
        />

        <div className="teste">

          <ModalDownload download1={acidentes} classeSecundaria1="show" titulo1="Acidentes"
            download2={acidentes} classeSecundaria2="hide" titulo2="Comissionados"
            download3={acidentes} classeSecundaria3="hide " titulo3="Efetivados"
            download4={acidentes} classeSecundaria4="hide"
            download5={acidentes} classeSecundaria5="hide" />
        </div>

        <section class="page-section-sub-boxlegend " id="about">
          <Container>
            <ListarPaineis details={initialDetails} props="Transito" />
          </Container>
        </section>

      </>
    );
  }
}
