
import React, { useState, useEffect } from "react";
import NavMaps from "./Mapas/NavMaps";
import CardItem from "../CardItem";
import Search from '../../components/Search';
import initialDetails from '../../components/data/initialDetails';
{/* Cards de opções de submenu de mapas*/}
export default function Mapas() {
  return (
    <>
              <Search details={initialDetails}/>
      <div className="cards">
      <h1>Mapas temáticos</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
            src="images/inframap.png"
              text=""
              label="Infraestrutura"
              path="/infraestruturamaps"
            />
                     <CardItem
               src="images/ambientemap.png"
              text=""
              label="Meio Ambiente"
              path="/meioambientemaps"
            />
                     <CardItem
              src="images/patrimoniomaps.png"
              text=""
              label="Patrimônio Público"
              path="/patrimoniomaps"
            />
                     <CardItem
              src="images/turismomaps.png"
              text=""
              label="Turismo"
              path="/turismomaps"
            />
                     <CardItem
              src="images/urbanismomaps.png"
              text=""
              label="Urbanismo"
              path="/urbanismomaps"
            />
                            <CardItem
              src="images/saude.png"
              text=""
              label="Saude"
              path="/saudemaps"
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


