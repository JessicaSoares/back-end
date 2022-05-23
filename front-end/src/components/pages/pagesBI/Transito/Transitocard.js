import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { Component } from "react";
import TextSectionItem from "../TextSectionItem";
import NavTransito from "./NavTransito";
import Search from '../../../../components/Search';
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

        const linhas = response.data; // Linhas reccebe os dados do JSON
        console.log(response.data); // Mostra no console os dados do JSON
        let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
          + linhas;
        var encodedUri = encodeURI(csvContent); 
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "acidentes.csv");
        document.body.appendChild(link);
        link.click();
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
              <NavTransito />
            </Col>
          </Row>
        </Container>
        <br /> <br />
        <TextSectionItem
          titlesection="Trânsito"
          textsection="A divulgação do Relatório Global do Estado da Segurança Viária pela Organização Mundial da Saúde (OMS), em 2015, que 1,25 milhão de pessoas morrem anualmente e cerca de 20 a 50 milhões de pessoas sofrem graves lesões devido a acidentes de trânsito em todo o mundo, desde 2007, traz à tona uma preocupação da sociedade e, principalmente, dos governantes para o tema da segurança viária e suas consequências, uma vez que é a principal causa de morte entre jovens de 15 a 29 anos, superando causas como homicídios, doenças do coração e cerebrovasculares. (WORLD HEALTH ORGANIZATION, 2011, 2015)."
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
