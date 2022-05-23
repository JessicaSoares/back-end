
import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, {Component } from "react";
import TextSectionItem from "../TextSectionItem";
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';
import ModalDownload from '../ModalDownload';
import NavAgronegocio from "./NavAgronegocio";
import Search from '../../../../components/Search';
import PortalDataService from "../../../services/portal.service";

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);
    

    this.downloadaves = this.downloadaves.bind(this);
    this.downloadbovinos = this.downloadbovinos.bind(this);
    this.downloadprodutoscap = this.downloadprodutoscap.bind(this);
    this.downloadagrifamiliar = this.downloadagrifamiliar.bind(this);


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

  downloadagrifamiliar() {  // Função que captura o json dos dados e faz o download em CSV
    PortalDataService.downloadagrifamiliar()
    .then(response => {

      const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "agriculturafamiliar.csv");
      document.body.appendChild(link);
      link.click();
      this.atualizarLista();
    })
    .catch(e => {
      console.log(e);
    });
}

  downloadaves() { // Função que captura o json dos dados e faz o download em CSV
    PortalDataService.downloadaves()
    .then(response => {

      const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "aves.csv");
      document.body.appendChild(link);
      link.click();
      this.atualizarLista();
    })
    .catch(e => {
      console.log(e);
    });
}
  downloadbovinos() { // Função que captura o json dos dados e faz o download em CSV
    PortalDataService.downloadbovinos()
    .then(response => {

      const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "bovinos.csv");
      document.body.appendChild(link);
      link.click();
      this.atualizarLista();
    })
    .catch(e => {
      console.log(e);
    });
}

  downloadprodutoscap() { // Função que captura o json dos dados e faz o download em CSV
    PortalDataService.downloadprodutoscap()
    .then(response => {

      const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "produtos.csv");
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
    const agriculturafamiliar=()=>{
      return this.downloadagrifamiliar // Chama a função de download dos dados
    }
    const aves=()=>{
      return this.downloadaves // Chama a função de download dos dados
    }
    const produtoscap=()=>{
      return this.downloadprodutoscap // Chama a função de download dos dados
    }
    const bovino=()=>{
      return this.downloadbovinos // Chama a função de download dos dados
    }

  
    return (
     
    <>
     <Search details={initialDetails}/> {/* Módulo de busca com filtro*/}
<Container>
  <Row>

       <Col sm={8}>
         <NavAgronegocio/> {/* Módulo que trás o submenu*/}
         </Col>
         </Row>
</Container>
       <br/> <br/>
   <TextSectionItem
      titlesection = "Agricultura Familiar"
      textsection = "Agricultura familiar é toda forma de cultivo de terra que é administrada por uma família e emprega como mão de obra os membros da mesma. Ela é responsável pela maior parcela de empregos gerados no campo e representa a maior parte das propriedades agropecuárias brasileiras. Este segmento caracteriza-se pela produção de uma grande variedade de alimentos, com destaque para culturas como café, feijão, mandioca, banana e abacaxi."
      /> {/* Módulo que recebe o  título e o texto daquele inidicador*/}

<div className = "teste">   

<ModalDownload download1 = {agriculturafamiliar} classeSecundaria1="show" titulo1 ="Agricultura familiar" 
              download2 = {aves} classeSecundaria2="show"  titulo2 = "Aves"
              download3 = {bovino} classeSecundaria3="show "titulo3 = "Bovinos"
              download4 = {produtoscap} classeSecundaria4="hide" 
              download5 = {bovino} classeSecundaria5="hide"/> {/* Módulo que trás o modal de Download, recebe por parâmetro a função de download se é hide 
            ou show, ou seja se aparece ou não no select e o título que é o nome no select*/}

         </div>

    
<section class="page-section-sub-boxlegend " id="about">
        <Container>
       <ListarPaineis details={initialDetails} props ="ProdCentro" />{/* Módulo de busca que trás os painéis de acordo com a categoria*/}
        </Container>
      </section>
    </>
  );
}}


