import "../graphs.css";
import "../BoxLegend.css";
import React, { useState, useEffect } from "react";
import NavSubItem from "../NavSubItem";

export default function NavAgronegocio() {  {/*Chama o módulo de submenu e passa os parâmetro como link e nome de cada link, Icone do submenu  e nome do submenu */}

  return (
    
    <NavSubItem 
    link1 = "/producaoagricola"
    name1 = "Produção Agrícola"
    link2 = "/centrodeabastecimento"
    name2 = "Agricultura Familiar"
    link3 = "/pecuaria"
    name3 = "Pecuária"
    link4 = ""
    name4 = ""
    imageicon = "images/agronegocioIcon.png"
    subname = "Agronegócio"
    />
      ); 
    }
