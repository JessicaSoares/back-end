import React from 'react';
import MenuNavegacao from './components/MenuNavegacao';
import Rodape from './components/Rodape'
import { GlobalStyles } from "./styles/globalStyles";
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from "react-helmet";

import Agronegocio from './components/pages/Agronegocio';
import Social from './components/pages/Social';
import Transito from './components/pages/Transito';
import MeioAmbiente from './components/pages/MeioAmbiente';
import Infraestrutura from './components/pages/Infraestrutura';
import Empregos from './components/pages/pagesBI/Social/Empregos';
import Economia from './components/pages/Economia';
import Turismo from './components/pages/Turismo';


import PIB from './components/pages/pagesBI/Economia/PIB';
import ComercialBI from './components/pages/pagesBI/ComercialBI';
import BalancaComercial from './components/pages/pagesBI/Economia/BalancaComercial';
import ComercioIndustria from './components/pages/pagesBI/Economia/ComercioIndustria';
import ProdCentro from './components/pages/pagesBI/Agronegocio/ProdCentro';
import ProdMunicipal from './components/pages/pagesBI/Agronegocio/ProdMunicipal';
import ProdPecuaria from './components/pages/pagesBI/Agronegocio/ProdPecuaria';
import Populacao from './components/pages/pagesBI/Social/Populacao';
import Educacao from './components/pages/pagesBI/Social/Educacao';
import Saude from './components/pages/pagesBI/Social/Saude';

import DashboardsGov from './components/pages/DashboardsGov';

import Agua from './components/pages/pagesBI/Infraestrutura/Agua';
import Esgoto from './components/pages/pagesBI/Infraestrutura/Esgoto';
import Iluminacao from './components/pages/pagesBI/Infraestrutura/Iluminacao';
import Despesas from './components/pages/pagesBI/Economia/Despesas';
import DespesasPessoal from './components/pages/pagesBI/Economia/DespesasPessoal';
import Receitas from './components/pages/pagesBI/Economia/Receitas';
import Lixo from './components/pages/pagesBI/Infraestrutura/Lixo';
import Queimadas from './components/pages/pagesBI/MeioAmbiente/Queimadas';
import AtendimentoMulher from './components/pages/pagesBI/Social/AtendimentoMulher';


import Transitocard from './components/pages/pagesBI/Transito/Transitocard';
import Turismocard from './components/pages/pagesBI/Turismo/Turismocard';

import Mapas from './components/pages/Mapas';
import Infraestruturamaps from './components/pages/Mapas/Infraestrutura/Infraestrutura';
import Urbanismomaps from './components/pages/Mapas/Urbanismo/Urbanismo';
import MeioAmbientemaps from './components/pages/Mapas/MeioAmbiente/MeioAmbiente';
import Patrimoniomaps from './components/pages/Mapas/PatrimonioPublico/Patrimonio';
import Turismomaps from './components/pages/Mapas/Turismo/Turismo';
import Saudemaps from './components/pages/Mapas/Saude/Saude';


import DespesasMenu from './components/pages/pagesBI/Economia/DespesasFork';

import AgronegocioGov from './components/pages/dashboardsGov/AgronegocioGov';
import MeioAmbienteGov from './components/pages/dashboardsGov/MeioAmbienteGov';
import { ThemeProvider } from 'styled-components';


const App = () => {

  return (

     <>  <GlobalStyles />
          <Helmet>
              <title>Observatório de dados de Parauapebas</title>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
              <link
                  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
                  rel="stylesheet"
              />
          </Helmet>
          <MenuNavegacao />

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/meioambiente' exact element={<MeioAmbiente />} />
          <Route path='/turismo' exact element={<Turismo />} />
          <Route path='/infraestrutura' exact element={<Infraestrutura />} />
          <Route path='/empregos' exact element={<Empregos />} />
          <Route path='/educacao' exact element={<Educacao />} />
      
          <Route path='/agronegocio' element={<Agronegocio />} />
       
          <Route path='/Saude' element={<Saude />} />
          <Route path='/Transito' element={<Transito />} />
          <Route path='/DashboardsGov' element={<DashboardsGov />} />
          <Route path='/Social' element={<Social />} />
          <Route path='/economia' element={<Economia />} />
          <Route path='/pib'exact element={<PIB />} />
          <Route path='/ComercialBI' element={<ComercialBI />} />
          <Route path='/populacao' element={<Populacao />} />
          <Route path='/balancacomercial' element={<BalancaComercial />} />
          <Route path='/comercioindustria' element={<ComercioIndustria />} />
          <Route path='/producaoagricola' element={<ProdMunicipal />} />
          <Route path='/centrodeabastecimento' element={<ProdCentro />} />
          <Route path='/pecuaria' element={<ProdPecuaria />} />
          <Route path='/esgoto' element={<Esgoto />} />
          <Route path='/agua' element={<Agua />} />
          <Route path='/iluminacao' element={<Iluminacao />} />
          <Route path='/despesas' element={<Despesas />} />
          <Route path='/receitas' element={<Receitas />} />
          <Route path='/lixo' element={<Lixo />} />
          <Route path='/queimadas' element={<Queimadas />} />
          <Route path='/despesaspessoal' element={<DespesasPessoal />} />
          <Route path='/atendimentomulher' element={<AtendimentoMulher />} />

          
          <Route path='/mapas' element={<Mapas />} />
          <Route path='/infraestruturamaps' element={<Infraestruturamaps />} />
          <Route path='/urbanismomaps' element={<Urbanismomaps />} />
          <Route path='/meioambientemaps' element={<MeioAmbientemaps />} />
          <Route path='/patrimoniomaps' element={<Patrimoniomaps />} />
          <Route path='/turismomaps' element={<Turismomaps />} />
          <Route path='/saudemaps' element={<Saudemaps />} />

          <Route path='/despesasmenu' element={<DespesasMenu />} />

          <Route path='/agronegociogov' element={<AgronegocioGov />} />
          <Route path='/meioambientegov' element={<MeioAmbienteGov />} />

          <Route path='/transitocard' element={<Transitocard />} />
          <Route path='/turismocard' element={<Turismocard />} />

        </Routes>
        <Rodape /> 
</>
    
  );
};

export default App;

