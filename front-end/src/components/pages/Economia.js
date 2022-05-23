import React from "react";
import "../../App.css";
import "../Cards.css";
import CardItem from "../CardItem";
import Search from '../../components/Search';
import initialDetails from '../../components/data/initialDetails';
{/* Cards de opções de submenu do indicador*/}
export default function Economia() {
  return (
    <>
    
    <Search details={initialDetails}/>

      <div className="cards">
      <h1>Indicadores da economia</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
           src="https://img.icons8.com/dotty/80/4a90e2/scales.png"
              text=""
              label="Balança comercial"
              path="/balancacomercial"
            />
            <CardItem
           src="https://img.icons8.com/dotty/80/4a90e2/banknotes.png"
              text=""
              label="PIB"
              path="/pib"
            />
            <CardItem
             src="https://img.icons8.com/dotty/80/4a90e2/factory.png"
              text=""
              label="Comercio e Industria"
              path="/comercioindustria"
            />         
            <CardItem
            src="https://img.icons8.com/dotty/80/4a90e2/ledger.png"
              text=""
              label="Receitas"
              path="/receitas"
            />
            <CardItem
           src="https://img.icons8.com/dotty/80/4a90e2/low-price.png"
              text=""
              label="Despesas"
              path="/despesasmenu"
            />
          </ul>
          <ul className="cards__items">

          </ul>
        </div>
      </div>
    </div>
    </>
  );
}
