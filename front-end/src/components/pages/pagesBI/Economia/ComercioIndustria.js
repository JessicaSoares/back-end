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


    this.downloadempresas = this.downloadpequenoporte.bind(this);
    this.downloadmedioporte = this.downloadmedioporte.bind(this);
    this.downloaddemais = this.downloaddemais.bind(this);
    this.downloadgrandeporte = this.downloadgrandeporte.bind(this);
    this.downloadnaoinformado = this.downloadnaoinformado.bind(this);
    this.downloadmicroempresa = this.downloadmicroempresa.bind(this);


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

  downloadpequenoporte() {// Função que captura o json dos dados e faz o download em CSV
    PortalDataService.downloadpequenoporte()
    .then(response => {

      const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "pequnoporte.csv");
      document.body.appendChild(link);
      link.click();
      this.atualizarLista();
      })
      .catch(e => {
        console.log(e);
      });
  }

  downloadmedioporte() {// Função que captura o json dos dados e faz o download em CSV
    PortalDataService.downloadmedioporte()
    .then(response => {

      const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "medioporte.csv");
      document.body.appendChild(link);
      link.click();
      this.atualizarLista();
      })
      .catch(e => {
        console.log(e);
      });
    }
  
  downloadnaoinformado() {
    PortalDataService.downloadnaoinformado()
    .then(response => {

      const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "naoinformado.csv");
      document.body.appendChild(link);
      link.click();
      this.atualizarLista();
      })
      .catch(e => {
        console.log(e);
      });
  
    }
  downloadmicroempresa() {// Função que captura o json dos dados e faz o download em CSV
    PortalDataService.downloadmicroempresa()
    .then(response => {

      const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "microempresa.csv");
      document.body.appendChild(link);
      link.click();
      this.atualizarLista();
    })
    .catch(e => {
      console.log(e);
    });
}

  downloaddemais() {// Função que captura o json dos dados e faz o download em CSV
    PortalDataService.downloaddemais()
    .then(response => {

      const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "demaisempresas.csv");
      document.body.appendChild(link);
      link.click();
      this.atualizarLista();
      })
      .catch(e => {
        console.log(e);
      });
  }
  downloadgrandeporte() {// Função que captura o json dos dados e faz o download em CSV
    PortalDataService.downloadgrandeporte()
    .then(response => {

      const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "grandeporte.csv");
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
    const pequenoporte = () => {
      return this.downloadpequenoporte// Chama a função de download dos dados
    }
    const setor = () => {
      return this.downloadmedioporte// Chama a função de download dos dados
    }
    const demais = () => {
      return this.downloaddemais// Chama a função de download dos dados
    }

    const microempresa  = () => {
      return this.downloadmicroempresa// Chama a função de download dos dados
    }

    const naoinformado = () => {
      return this.downloadnaoinformado// Chama a função de download dos dados
    }

    const grandeporte = () => {
      return this.downloadgrandeporte// Chama a função de download dos dados
    }

    return (

      <>
      <Search details={initialDetails}/>
<Container>
  <Row>

       <Col sm={8}>
         <NavEconomia/>
         </Col>
         </Row>
</Container>
       <br/> <br/>
        <TextSectionItem
          titlesection="Comércio e Indústria"
          textsection=" Comércio e Indústria é toda atividade humana que através do trabalho transforma matéria prima em produtos manufaturados que podem ou não ser comercializados."
        />
        <div className="teste">

          <ModalDownload download1={pequenoporte} classeSecundaria1="show" titulo1="Pequeno porte"
            download2={setor} classeSecundaria2="show" titulo2="Médio Porte"
            download3={demais} classeSecundaria3="show " titulo3="Demais empresas"
            download4={microempresa} classeSecundaria4="show" titulo4="Microempresas"
            download5={grandeporte} classeSecundaria5="show" titulo5="Grande Porte" />

        </div>

        <section class="page-section-sub-boxlegend " id="about">
          <Container>

            <ListarPaineis details={initialDetails} props="ComercioIndustria" />
          </Container>
        </section>
  
      </>
      
    );
  }
}
