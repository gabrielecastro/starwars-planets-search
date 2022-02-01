import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function ButtonDelete() {
  const { filtersGlobal, setFiltersGlobal } = useContext(AppContext);

  return (
    <div>
      {filtersGlobal.map((item, index) => (
        <div key={ index }>
          <span>{item.column}</span>
          <span>{item.comparison}</span>
          <span>{item.value}</span>

          <button
            data-testid="filter"
            type="button"
            onClick={ () => {
              const cloneArray = [...filtersGlobal];
              cloneArray.splice(index, 1);
              setFiltersGlobal(cloneArray);
            } }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default ButtonDelete;
