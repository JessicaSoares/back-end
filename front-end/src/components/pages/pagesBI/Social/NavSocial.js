import "../graphs.css";
import "../BoxLegend.css";
import React from "react";
import NavSubItem from "./NavSubSocial";

export default function NavSocial() {   {/*Chama o módulo de submenu e passa os parâmetro como link e nome de cada link, Icone do submenu  e nome do submenu */}

  return (
    
    <NavSubItem 
    link1 = "/educacao"
    name1 = "Educação"
    link2 = "/populacao"
    name2 = "População"
    link3 = "/saude"
    name3 = "Saúde"
    link4 = "/empregos"
    name4 = "Empregos"
    imageicon = "images/populacaoatendidaIcon.png"
    subname = "Social"
    />
      ); 
    }
