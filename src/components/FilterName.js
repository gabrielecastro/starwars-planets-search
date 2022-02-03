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
    <div className="bg-black text-gray-300 flex justify-center pb-5 pt-20">
      <input
        className="bg-slate-200 w-72 text-black h-8
          border-slate-300 text-center rounded-md"
        type="text"
        data-testid="name-filter"
        placeholder="Nome"
        onChange={ handleChange }
        value={ name }
      />
    </div>
  );
}

export default FilterName;
