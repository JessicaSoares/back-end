import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { Component } from "react";
import Search from '../../../../components/Search';
import TextSectionItem from "../TextSectionItem";
import NavInfraestrutura from "./NavInfraestrutura";
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';
import ModalDownload from '../ModalDownload';

import PortalDataService from "../../../services/portal.service";

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);
    
    this.downloadiluminacao = this.downloadiluminacao.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: ""
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


  downloadiluminacao() {
    PortalDataService.downloadiluminacao()
    .then(response => {

      const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "iluminacao.csv");
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
    const iluminacao=()=>{
      return this.downloadiluminacao // Chama a função de download dos dados download despesa
    }

  
    return (
     
    <>
     
  <Search details={initialDetails}/> {/* Módulo de busca com filtro*/}
<Container>
  <Row>

       <Col sm={8}>
         <NavInfraestrutura/> {/* Módulo que trás o submenu */}
         </Col>
         </Row>
</Container>
       <br/> <br/>
      <TextSectionItem
      titlesection = "Iluminação"
      textsection = "Iluminação pública é o sistema de iluminação noturna das cidades, essencial à qualidade de vida nos centros urbanos, atuando como instrumento de cidadania, permitindo aos habitantes desfrutar, plenamente, do espaço público no período noturno."
      /> {/* Módulo que recebe o  título e o texto daquele inidicador*/}

<div className = "teste">   

<ModalDownload download1 = {iluminacao} classeSecundaria1="show" titulo1 ="Iluminação" 
              download2 = {iluminacao} classeSecundaria2="hide"  titulo2 = "Por setor"
              download3 = {iluminacao} classeSecundaria3="hide "titulo3 = "Por município"
              download4 = {iluminacao} classeSecundaria4="hide" 
              download5 = {iluminacao} classeSecundaria5="hide"/>  {/* Módulo que trás o modal de Download, recebe por parâmetro a função de download se é hide 
            ou show, ou seja se aparece ou não no select e o título que é o nome no select*/}

         </div>

    
<section class="page-section-sub-boxlegend " id="about">
        <Container>
       
        <ListarPaineis details={initialDetails} props ="Iluminacao" /> {/* Módulo de busca que trás os painéis de acordo com a categoria*/}
        </Container>
      </section>
    </>
  );
}}
