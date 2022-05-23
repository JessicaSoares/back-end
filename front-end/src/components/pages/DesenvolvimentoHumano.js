import React from "react";
import "../../App.css";
import "../Cards.css";
import CardItem from "../CardItem";
import NavSubItem from "../pages/pagesBI/NavSubItem";
{/* Cards de opções de submenu do indicador*/}
export default function DesenvolvimentoHumano() {
  return <>

      <div className="cards">
      <h1>Indicadores de Desenvolvimento Humano</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://img.icons8.com/dotty/80/4a90e2/fingerprint.png"
              text=""
              label="Desenvolvimento Humano"
              path="/desenvhumano"
            />
           
          </ul>
          <ul className="cards__items">
          </ul>
        </div>
      </div>
    </div>
  </>;
}
