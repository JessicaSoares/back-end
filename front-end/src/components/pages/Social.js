import React from "react";
import "../../App.css";
import "../Cards.css";
import CardItem from "../CardItem";
import NavSubSocial from "../pages/pagesBI/Economia/NavSubEconomia";
import Search from '../../components/Search';
import initialDetails from '../../components/data/initialDetails';
{/* Cards de opções de submenu do indicador*/}

export default function Social() {
  return( <>
           <Search details={initialDetails}/>
      <div className="cards">
      <h1>Indicadores Sociais</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
         src="https://img.icons8.com/dotty/80//4a90e2/motarboard.png"
              text=""
              label="Educacao"
              path="/educacao"
            />
            <CardItem
       src="https://img.icons8.com/dotty/80//4a90e2/crowd.png"
              text=""
              label="População"
              path="/populacao"
            />
            <CardItem
           src="https://img.icons8.com/dotty/80//4a90e2/heart-with-pulse.png"
              text=""
              label="Saúde"
              path="/saude"
            />
            <CardItem
        src="https://img.icons8.com/dotty/80//4a90e2/meeting.png"
              text=""
              label="Empregos"
              path="/empregos"
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
