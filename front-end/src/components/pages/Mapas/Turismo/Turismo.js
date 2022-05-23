import "../../pagesBI/graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../../pagesBI/BoxLegend.css";
import React from "react";
import TextSectionItem from "../../pagesBI/TextSectionItem";
import initialDetails from '../../../data/initialDetails';
import Search from '../../../../components/Search';
import ListarPaineis from '../../../ListarPaineis';
import NavMaps from '../NavMaps'
	  {/*Página de exibição de mapas*/}
export default function Urbanismo() {

  return (
    <>
     <Search details={initialDetails} />{/*Módulo de filtro de busca*/}
      <Container>
        <Row>

          <Col sm={8}>
            <NavMaps /> {/*Módulo de Submenu de opções de mapas*/}
          </Col>
        </Row>
      </Container>
      <br /> <br />{/*Módulo de texto e título relacionado ao mapa*/}
      <TextSectionItem
        titlesection="Turismo"
        textsection="Os mapas apresentados aqui foram criados pela prefeitura por meio da Secretaria Especial de Governo-SEGOV em parceria com as demais secretarias. O projeto está mapeamento a cidade toda e fazendo um levantamento detalhado de imagens e informações que vão nortear o desenvolvimento ordenado do município. Ele é uma grande ferramenta que vai cruzar informações demográficas, imobiliárias e de serviços públicos para ajudar a conhecer melhor nosso território, permitindo que a prefeitura tenha condições de saber com mais eficiência quais bairros precisam de mais asfaltamento, escolas, postos de saúde, iluminação e demais ações públicas."
      />

      <section class="page-section-sub-boxlegend " id="about">
        <Container>

          <ListarPaineis details={initialDetails} props="turismoMaps" /> {/*Módulo que trás o mapa correspondente a categoria da página (props define a categoria)*/}
        </Container>
      </section>

    </>
  );
}
