import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function FilterName() {
  const { data } = useContext(AppContext);
  const { name, setName } = useContext(AppContext);
  const { setPlanets } = useContext(AppContext);

  function filterName(planet) {
    const planetsFilter = data.filter((item) => item.name.includes(planet));
    setPlanets(planetsFilter);
  }

  function handleChange({ target: { value } }) {
    setName(value);
    filterName(value);
  }

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleChange }
        value={ name }
      />
    </div>
  );
}

export default FilterName;
