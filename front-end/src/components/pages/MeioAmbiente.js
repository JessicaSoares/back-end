import React from 'react';
import '../../App.css';
import "../Cards.css";
import CardItem from "../CardItem";
import NavSubItem from "../pages/pagesBI/NavSubItem";
import Search from '../../components/Search';
import initialDetails from '../../components/data/initialDetails';
{/* Cards de opções de submenu do indicador*/}
export default function MeioAmbiente() {
  return (
    <>
          <Search details={initialDetails}/>
      <div className="cards">
      <h1>Indicadores do meio ambiente</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://img.icons8.com/dotty/80/4a90e2/wildfire.png"
              text=""
              label="Queimadas"
              path="/queimadas"
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


