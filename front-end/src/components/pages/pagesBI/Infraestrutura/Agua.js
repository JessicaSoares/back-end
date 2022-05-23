import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, {Component } from "react";
import TextSectionItem from "../TextSectionItem";
import NavInfraestrutura from "./NavInfraestrutura";
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';
import ModalDownload from '../ModalDownload';
import Search from '../../../../components/Search';
import PortalDataService from "../../../services/portal.service";

export default class Agua extends Component {
  constructor(props) {
    super(props);
    
    this.refreshList = this.refreshList.bind(this);
    this.downloadagua = this.downloadagua.bind(this);

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

  downloadagua() {
    PortalDataService.downloadagua()
    .then(response => {

      const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "agua.csv");
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
    const agua=()=>{
      return this.downloadagua // Chama a função de download dos dados download despesa
    }
  
    return (
     
    <>
    
<Search details={initialDetails}/> {/* Módulo de busca com filtro*/}
<Container>
  <Row>

       <Col sm={8}>
         <NavInfraestrutura/>{/* Módulo que trás o submenu */}
         </Col>
         </Row>
</Container>
       <br/> <br/>
     <TextSectionItem
      titlesection = "Abastecimento de Água"
      textsection = "Um sistema de abastecimento de água consiste no conjunto de obras, equipamentos e serviços com o objetivo de levar água potável para uso no consumo doméstico, indústria, serviço público, entre outros. O SAAEP – Serviço Autônomo de Água e Esgoto de Parauapebas foi fundado em 2009, após a criação da Lei n° 4.385, de 11 de agosto de 2009, com o objetivo de desenvolver os serviços de saneamento na cidade de Parauapebas. É uma autarquia da administração indireta da Prefeitura Municipal de Parauapebas, cujo objetivo é promover os serviços de captação, tratamento e distribuição de água potável para a população do município. Os dados coletados para construção dos gráficos que serão apresentados á seguir, têm origem do Sistema Nacional de Informações sobre Saneamento - SNIS, uma unidade vinculada à Secretaria Nacional de Saneamento do Ministério do Desenvolvimento Regional e alimentado pela SAAEP."
      />{/* Módulo que recebe o  título e o texto daquele inidicador*/}

<div className = "teste">   

<ModalDownload download1 = {agua} classeSecundaria1="show" titulo1 ="Água" 
              download2 = {agua} classeSecundaria2="hide"  titulo2 = "Por setor"
              download3 = {agua} classeSecundaria3="hide "titulo3 = "Por município"
              download4 = {agua} classeSecundaria4="hide" 
              download5 = {agua} classeSecundaria5="hide"/>{/* Módulo que trás o modal de Download, recebe por parâmetro a função de download se é hide 
            ou show, ou seja se aparece ou não no select e o título que é o nome no select*/}

         </div>

<section class="page-section-sub-boxlegend " id="about">
        <Container>
        <ListarPaineis details={initialDetails} props ="Agua" />{/* Módulo de busca que trás os painéis de acordo com a categoria*/}
        </Container>
      </section>
    </>
  );
}}
