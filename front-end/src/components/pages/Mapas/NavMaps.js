
import React from "react";
import NavSubItem from "../../pages/pagesBI/Economia/NavSubEconomia";

export default function NavMaps() {
  return (
    <>
      <NavSubItem
        link1="/infraestruturamaps"
        name1="Estrutura"
        link2="/meioambientemaps"
        name2="Ambiente"
        link3="/patrimoniomaps"
        name3="Patrimonio"
        link4="/turismomaps"
        name4="Turismo"
        link5="/urbanismomaps"
        name5="Urbanismo"
        imageicon="images/map.png"
        subname="Mapas"
      />
    </>
  );
}