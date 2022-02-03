/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import ButtonDelete from './ButtonDelete';

function FilterNumbers() {
  const { planets, setPlanets } = useContext(AppContext);
  const { filtersGlobal, setFiltersGlobal } = useContext(AppContext);

  const [columnOptions, setColumnOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const [filtersLocal, setFiltersLocal] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  useEffect(() => {
    setColumnOptions([
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ]);

    filtersGlobal.map(({ column }) => (
      setColumnOptions(columnOptions.filter((opt) => (
        opt !== column
      )))
    ));
  }, [filtersGlobal]);

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
      <div className=" bg-black flex justify-evenly p-5 block">
        <select
          className="bg-white w-72 text-black h-8 border-slate-300 text-center rounded-md"
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
          className="bg-white w-72 text-black h-8 border-slate-300 text-center rounded-md"
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
          className="bg-slate-200 w-72 text-black h-8
            border-slate-300 text-center rounded-md"
          type="number"
          data-testid="value-filter"
          value={ filtersLocal.value }
          name="value"
          onChange={ (e) => setFiltersLocal({
            ...filtersLocal, value: e.target.value,
          }) }
        />

        <button
          className="w-24 h-8 bg-yellow-400 rounded-md text-black font-medium"
          type="button"
          data-testid="button-filter"
          onClick={ filterNumberTable }
        >
          Filtrar
        </button>

      </div>
      <div className="block pl-20 pb-5">
        <ButtonDelete />
      </div>
    </div>
  );
}

export default FilterNumbers;
