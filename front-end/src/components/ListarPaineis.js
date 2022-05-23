import React, { useState } from 'react';
import SearchList from './SearchList';
{/* Lista painéis de powerBi ou mapas para suas págians correspondentes de acordo com a categoria do Data/initialDetails */ }
function Search({ details, props }) {

  const [searchField, setSearchField] = useState(props);
  const [searchShow, setSearchShow] = useState(true);

  const filteredPersons = details.filter(

    person => {
      return (
        person
          .categoria
          .toLowerCase()
          .includes(searchField.toLowerCase()) ||
        person
          .legend
          .toLowerCase()
          .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);

    }
    else {
      setSearchShow(true);

    }
  };

  function searchList() {
    if (searchShow) {
      return (

        <SearchList filteredPersons={filteredPersons} />	  /* Se for filtrado algo, mostrar os paineis fitrados */

      );
    }
  }

  return (
    <section className="garamond">

      <div className="pa2">

      </div>
      {searchList()}
    </section>
  );
}

export default Search;