import React from 'react';
import '../../App.css';
import "../Cards.css";
import CardItem from "../CardItem";
import NavSubItem from "../pages/pagesBI/Infraestrutura/NavInfraestrutura";
import Search from '../../components/Search';
import initialDetails from '../../components/data/initialDetails';
{/* Cards de opções de submenu do indicador*/}
export default function Infraestrutura() {
  return (
    <>
          <Search details={initialDetails}/>
      <div className="cards">
      <h1>Indicadores da Infraestrutura</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
  
            <CardItem
              src="https://img.icons8.com/dotty/80/4a90e2/waste.png"
              text=""
              label="Lixo"
              path="/lixo"
            />
                        <CardItem
           src="https://img.icons8.com/dotty/80/4a90e2/piping.png"
              text=""
              label="Esgoto"
              path="/esgoto"
            />
                        <CardItem
           src="https://img.icons8.com/dotty/80/4a90e2/plumbing.png"
              text=""
              label="Água"
              path="/agua"
            />
                                <CardItem
              src="https://img.icons8.com/dotty/80/4a90e2/light-on.png"
              text=""
              label="Iluminação"
              path="/iluminacao"
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


