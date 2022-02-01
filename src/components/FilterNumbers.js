import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

function FilterNumbers() {
  const { planets, setPlanets } = useContext(AppContext);
  const { filtersGlobal, setFiltersGlobal } = useContext(AppContext);

  const [filtersLocal, setFiltersLocal] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const columnOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  /*   useEffect(() => {
    console.log(filtersLocal.column);
  }, [filtersLocal]); */

  function filterNumberTable() {
    setFiltersGlobal([...filtersGlobal, filtersLocal]);

    const filterPlanetsValue = planets.filter((item) => {
      if (filtersLocal.comparison === 'maior que') {
        return Number(item[filtersLocal.column]) > Number(filtersLocal.value);
      } if (filtersLocal.comparison === 'menor que') {
        return Number(item[filtersLocal.column]) < Number(filtersLocal.value);
      }
      return Number(item[filtersLocal.column]) === Number(filtersLocal.value);
    });

    setPlanets(filterPlanetsValue);

    setFiltersLocal({
      column: 'population',
      comparison: 'maior que',
      value: '0',
    });
  }

  return (
    <div>
      <select
        data-testid="column-filter"
        value={ filtersLocal.column }
        name="column"
        onChange={ (e) => setFiltersLocal({
          ...filtersLocal, column: e.target.value,
        }) }
      >
        {columnOptions.map((option) => (
          <option key={ option } value={ option }>{option}</option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        value={ filtersLocal.comparison }
        name="comparison"
        onChange={ (e) => setFiltersLocal({
          ...filtersLocal, comparison: e.target.value,
        }) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        value={ filtersLocal.value }
        name="value"
        onChange={ (e) => setFiltersLocal({
          ...filtersLocal, value: e.target.value,
        }) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterNumberTable }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterNumbers;
