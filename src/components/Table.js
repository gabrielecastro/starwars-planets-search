import React, { useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import getStarWars from '../services/starWarsAPI';
import FilterName from './FilterName';
import FilterNumbers from './FilterNumbers';

function Table() {
  const { setData } = useContext(AppContext);
  const { planets, setPlanets } = useContext(AppContext);

  useEffect(() => {
    async function returnDataAPI() {
      const returnAPI = await getStarWars();
      setData(returnAPI);
      setPlanets(returnAPI);
    }
    returnDataAPI();
  }, [setData, setPlanets]);

  return (
    <div>
      <FilterName />
      <FilterNumbers />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>

        <tbody>
          {planets.map((planet) => (
            <tr key={ planet.name }>
              <td>{ planet.name }</td>
              <td>{ planet.rotation_period }</td>
              <td>{ planet.orbital_period }</td>
              <td>{ planet.diameter }</td>
              <td>{ planet.climate }</td>
              <td>{ planet.gravity }</td>
              <td>{ planet.terrain }</td>
              <td>{ planet.surface_water }</td>
              <td>{ planet.population }</td>
              <td>{ planet.films }</td>
              <td>{ planet.created }</td>
              <td>{ planet.edited }</td>
              <td>{ planet.url }</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default Table;
