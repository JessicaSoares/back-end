import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import Search from '../../../../components/Search';
import React, { useState, useEffect } from "react";
import GraphItem from "../GraphItem";
import TextSectionItem from "../TextSectionItem";
import NavSocial from "./NavSocial";
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';
export default function Saude() {

  return (
    <>

<Search details={initialDetails}/>
<Container>
  <Row>

       <Col sm={8}>
         <NavSocial/>
         </Col>
         </Row>
</Container>
       <br/> <br/>
       <TextSectionItem
      titlesection = "Saúde Pública"
      textsection = "Saúde Pública é todo o conjunto de medidas executadas pelo Estado para garantir o bem-estar físico, mental e social da população. Em nível internacional, a saúde pública é coordenada pela Organização Mundial de Saúde – OMS, este órgão consiste em uma agência especializada da ONU - Organização das Nações Unidas que trabalha lado a lado com o governo dos países para aprimorar a prevenção e o tratamento de doenças, além de melhorar a qualidade do ar, da água e dos alimentos.
      Além do contexto político-administrativo a saúde pública também é o ramo da ciência que busca prevenir e tratar doenças através da análise de indicadores de saúde e sua aplicação nos campos da biologia, epidemiologia e outros campos relacionados."/>
<section class="page-section-sub-boxlegend " id="about">
        <Container>
       
       <ListarPaineis details={initialDetails} props ="saude" />
        </Container>
      </section>
    </>
  );
}
