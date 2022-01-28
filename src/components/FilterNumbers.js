import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function FilterNumbers() {
  const { column, setColumn } = useContext(AppContext);
  const { comparison, setComparison } = useContext(AppContext);
  const { value, setValue } = useContext(AppContext);
  const { planets, setPlanets } = useContext(AppContext);

  const columnOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  function filterNumberTable() {
    const filterPlanetsValue = planets.filter((item) => {
      if (comparison === 'maior que') {
        return Number(item[column]) > Number(value);
      } if (comparison === 'menor que') {
        return Number(item[column]) < Number(value);
      }
      return Number(item[column]) === Number(value);
    });
    setPlanets(filterPlanetsValue);
  }

  return (
    <div>
      <select
        data-testid="column-filter"
        value={ column }
        name="column"
        onChange={ (e) => setColumn(e.target.value) }
      >
        {columnOptions.map((option) => (
          <option key={ option } value={ option }>{option}</option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        value={ comparison }
        name="comparison"
        onChange={ (e) => setComparison(e.target.value) }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        value={ value }
        name="value"
        onChange={ (e) => setValue(e.target.value) }
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
