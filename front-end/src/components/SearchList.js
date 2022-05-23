import React from 'react';
import Card from './pages/pagesBI/GraphItem';
import Col from 'react-bootstrap/Col';
import "./MenuNavegacao.css";

function SearchList({ filteredPersons }) {  {/*Recebe como parâmetro os dados filtrados na busca e os exibe*/}
  const filtered = filteredPersons.map( person =>  <Card key={person.titulobi} person={person} />); 
  return (
    <div className='searchList'>
         <Col sm={12}>
      {filtered}
      </Col>
    </div>
  );
}

export default SearchList;