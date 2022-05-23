import React from "react";
import "../pagesBI/graphs.css";
import {Col } from "react-grid-system";
import "../pagesBI/BoxLegend.css"
import Accordion from 'react-bootstrap/Accordion'
function GraphItem(person) {

  return (
      <>

<div class="container">
    <div class="row">
      <div class="col-sm"></div>
      <Col sm={11}>
        {" "}
        <div className="boxlegend">
          <h1 className="titulobi">
            {person.titulobi}
          </h1>
         
          <iframe src={person.url} className="mapas"
        loading="eager"
       ></iframe> <br />
          <Accordion classname = "maisinfos" defaultActiveKey="1" >
            <Accordion.Item eventKey="0">
              <Accordion.Header>Mais informações</Accordion.Header>
              <Accordion.Body >
              <div ><div><div
      className="legend"
      dangerouslySetInnerHTML={{__html: person.legend}}
    /></div></div>{" "}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          </div>
      </Col>
      <div class="col-sm"></div>
    </div>
  </div>
    </>
  );
}

export default GraphItem;