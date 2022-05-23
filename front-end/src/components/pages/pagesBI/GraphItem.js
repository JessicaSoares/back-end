import React from "react";
import "./graphs.css";
import { Col } from "react-grid-system";
import "./BoxLegend.css";
import Button from "@material-ui/core/Button";
import Accordion from 'react-bootstrap/Accordion'
import { TiArrowForward } from "react-icons/ti";
{/* Componente que mostra o iframe do PowerBI, esse componente mostra o título que é recebido como parâmetro (person.titulobi), a url do iframe 
(person.url) e o mais informações (person.legend)*/}
function GraphItem({ person }) {

  return (
    <>

      <div class="container">
        <div class="row">
          <div class="col-sm"></div>
          <Col sm={9}>
            {" "}
            <div className="boxlegend">
              <h1 className="titulobi">
                {person.titulobi}
              </h1>

              <iframe src={person.url} className="economia"
                loading="eager"
              ></iframe> <br />

              <Button className="botao" endIcon={< TiArrowForward />} href={person.url} target="_blank" variant="outlined">Visualizar</Button>
              <br /><br />
              <Accordion classname="maisinfos" defaultActiveKey="1" >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Mais informações</Accordion.Header>

                  <Accordion.Body >
                    <div ><div><div
                      className="legend"
                      dangerouslySetInnerHTML={{ __html: person.legend }}
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