import "../graphs.css";
import { Container, Row, Col } from "react-grid-system";
import "../BoxLegend.css";
import React, { useState, useEffect } from "react";
import GraphItem from "../GraphItem";
import Search from '../../../../components/Search';
import TextSectionItem from "../TextSectionItem";
import NavSocial from "./NavSocial";
import ListarPaineis from '../../../ListarPaineis';
import initialDetails from '../../../data/initialDetails';

export default function Populacao() {

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
       <br/> <br/><TextSectionItem
      titlesection = "Perfil Populacional"
      textsection = " O Perfil Populacional dispõe sobre o raio x do município em formato númerico, revelando dados da população estimada, área territorial, número de eleitores, PIB percapta e índice de desenvolvimento humano (IDH) do município."/>
 <section class="page-section-sub-boxlegend " id="about">
        <Container>
       
       <ListarPaineis details={initialDetails} props ="Populacao" />
        </Container>
      </section>
    </>
  );
}