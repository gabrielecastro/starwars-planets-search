import React, { useContext } from 'react';
import lixeira from '../images/excluir.png';
import AppContext from '../context/AppContext';

function ButtonDelete() {
  const { filtersGlobal, setFiltersGlobal } = useContext(AppContext);

  return (
    <div>
      {filtersGlobal.map((item, index) => (
        <div className="block flex pb-3" key={ index }>
          <span className="pr-2">{item.column}</span>
          <span className="pr-2">{item.comparison}</span>
          <span className="pr-2">{item.value}</span>

          <button
            data-testid="filter"
            type="button"
            onClick={ () => {
              const cloneArray = [...filtersGlobal];
              cloneArray.splice(index, 1);
              setFiltersGlobal(cloneArray);
            } }
          >
            <img
              className="white h-6"
              src={ lixeira }
              alt="button-delete"
            />
          </button>
        </div>
      ))}
    </div>
  );
}

export default ButtonDelete;
