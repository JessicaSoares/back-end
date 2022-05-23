import "../graphs.css";
import "../BoxLegend.css";
import React, { useState, useEffect } from "react";
import NavSubItem from "./NavSubEconomia";

export default function NavEconomia() {   {/*Chama o módulo de submenu e passa os parâmetro como link e nome de cada link, Icone do submenu  e nome do submenu */}

  return (
    
    <NavSubItem 
    link1 = "/balancacomercial"
    name1 = "Balança"
    link2 = "/pib"
    name2 = "PIB"
    link3 = "/comercioindustria"
    name3 = "Comércio"
    link4 = "/despesas"
    name4 = "Despesas"
    link5 = "/receitas"
    name5 = "Receitas"
    imageicon = "images/economy-icon.png"
    subname = "Economia"
    />
      ); 
    }
