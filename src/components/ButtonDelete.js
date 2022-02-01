import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function ButtonDelete() {
  const { filtersGlobal } = useContext(AppContext);
  return (
    <div>
      {filtersGlobal.map(({ column, comparison, value }) => (
        <div key={ column }>
          <span>{column}</span>
          <span>{comparison}</span>
          <span>{value}</span>
          <button type="button">X</button>
        </div>
      ))}
    </div>
  );
}

export default ButtonDelete;
