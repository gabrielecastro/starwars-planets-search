import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState();
  const [planets, setPlanets] = useState([]);
  const [filterByNumericValues, setFilterByNumericValues] = useState({});
  const [filtersGlobal, setFiltersGlobal] = useState([]);

  const contextValue = {
    data,
    setData,
    name,
    setName,
    planets,
    setPlanets,
    filtersGlobal,
    setFiltersGlobal,
    filterByNumericValues,
    setFilterByNumericValues,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
