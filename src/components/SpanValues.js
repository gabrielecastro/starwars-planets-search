import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function SpanValues() {
  const { column } = useContext(AppContext);
  const { comparison } = useContext(AppContext);
  const { value } = useContext(AppContext);

  return (
    <div>
      <div className="container-span-filter">
        <span>{column}</span>
        <span>{comparison}</span>
        <span>{value}</span>
        <button type="button">X</button>
      </div>
    </div>
  );
}

export default SpanValues;
