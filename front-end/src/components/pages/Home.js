import React from 'react';
import '../../App.css';
import Cards from '../Cards';

import { lazy, Suspense } from "react";
import Slide from "../Carousel";
import Search from '../../components/Search';
import initialDetails from '../../components/data/initialDetails';

import About from "../../Sections/About/index";
import Testimonials from "../../Sections/Testimonials/index";
import styled from "styled-components";
import Aboutother from '../../components/Aboutother';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

{/* Invoca os componentes da página inicial*/}

function Home() {
  return (
    <>
      <Suspense fallback={null}> 
        <Search details={initialDetails} /> {/*Componente de busca com filtro*/}
        <Slide />{/*Componente de slide da página inicial*/}
        <Container>
          <About /> {/*Componente de sobre*/}
          <Testimonials />
          <Aboutother />
        </Container>
      </Suspense>
      <Cards />{/*Componente de inidicadores mais acessados*/}
    </>
  );
}

export default Home;
