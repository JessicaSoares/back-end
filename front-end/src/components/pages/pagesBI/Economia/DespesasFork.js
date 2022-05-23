import React from 'react';
import '../../../../App.css';
import "../../../Cards.css";
import CardItem from "../../../CardItem";
import initialDetails from '../../../data/initialDetails';
import Search from '../../../../components/Search';

export default function DespesasFork() {    {/* Aqui é onde o usuário vai escolher entre os dois tipos de despesas*/}
  return (
    <>
<Search details={initialDetails}/>  {/* Módulo de busca com filtro*/}
      <div className="cards">
      <h1>Despesas</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://img.icons8.com/dotty/80/4a90e2/low-price.png"
              text=""
              label="Despesas"
              path="/despesas"
            />    {/* Módulo de card do menu que recebe por parâmetro o a imagem, o texto do label e o link de redirecionamento*/}
            <CardItem
              src="https://img.icons8.com/dotty/80/4a90e2/budget.png"
              text=""
              label="Despesas com Pessoal"
              path="/despesaspessoal"
            />   {/* Módulo de card do menu que recebe por parâmetro o a imagem, o texto do label e o link de redirecionamento*/}
          </ul>
          <ul className="cards__items">

          </ul>
        </div>
      </div>
    </div>
    </>
  );
}


