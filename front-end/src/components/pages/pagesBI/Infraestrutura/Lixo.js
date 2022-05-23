import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, {Component } from "react";
import TextSectionItem from "../TextSectionItem";
import NavInfraestrutura from "./NavInfraestrutura";
import Search from '../../../../components/Search';
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';
import ModalDownload from '../ModalDownload';
import PortalDataService from "../../../services/portal.service";

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);
    
    this.downloadlixo = this.downloadlixo.bind(this);


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


  downloadlixo() {
    PortalDataService.downloadlixo()
    .then(response => {

      const linhas = response.data; // Linhas reccebe os dados do JSON
      console.log(response.data); // Mostra no console os dados do JSON
      let csvContent = "data:text/csv;charset=utf-8," // Monta os dados capturados para download
        + linhas;
      var encodedUri = encodeURI(csvContent); 
      var link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "lixo.csv");
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
    const lixo=()=>{
      return this.downloadlixo // Chama a função de download dos dados download 
    }
  
    return (
     
    <>
    
<Search details={initialDetails}/> {/* Módulo de busca com filtro*/}
<Container>
  <Row>

       <Col sm={8}>
         <NavInfraestrutura/>{/* Módulo que trás o submenu*/}
         </Col>
         </Row>
</Container>
       <br/> <br/>
     <TextSectionItem
      titlesection = "Coleta de Resíduos Sólidos - Parauapebas e Região"
      textsection = "Resíduos sólidos, segundo a Política Nacional de Resíduos Sólidos, são definidos como sendo todo material, substância, objeto ou bem descartado resultante de atividades humanas em sociedade. O Ofício n° 523/2021 de 12 de maio de 2021, institui a Política Municipal de Gestão Integrada de Resíduos Sólidos de Parauapebas, que constitui instrumento da gestão municipal de resíduos sólidos, em consonância com o Plano Nacional de Resíduos Sólidos e o Plano Estadual de Resíduos Sólidos, conforme as diretrizes da Lei Federal n° 12.305, de 02 de agosto de 2010." />
  {/* Módulo que recebe o  título e o texto daquele indicador*/}
<div className = "teste">   

<ModalDownload download1 = {lixo} classeSecundaria1="show" titulo1 ="Lixo" 
              download2 = {lixo} classeSecundaria2="hide"  titulo2 = "Por setor"
              download3 = {lixo} classeSecundaria3="hide "titulo3 = "Por município"
              download4 = {lixo} classeSecundaria4="hide" 
              download5 = {lixo} classeSecundaria5="hide"/>   {/* Módulo que trás o modal de Download, recebe por parâmetro a função de download se é hide 
            ou show, ou seja se aparece ou não no select e o título que é o nome no select*/}

         </div>

    
<section class="page-section-sub-boxlegend " id="about">
        <Container>
       
        <ListarPaineis details={initialDetails} props ="Lixo" /> {/* Módulo de busca que trás os painéis de acordo com a categoria*/}
        </Container>
      </section>
    </>
  );
}}
