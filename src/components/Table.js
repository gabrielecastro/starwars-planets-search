import React, { useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import getStarWars from '../services/starWarsAPI';
import FilterName from './FilterName';
import FilterNumbers from './FilterNumbers';

import logo from '../images/star-wars-logo.png';

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
    <div className="bg-black text-gray-300 p-0">
      <div className="p-20 h-16">
        <img src={ logo } alt="logo" />
      </div>
      <FilterName />
      <FilterNumbers />
      <table className=" bg-black table-auto border-separate">
        <thead>
          <tr>
            <th className="border border-slate-200 p-3">Name</th>
            <th className="border border-slate-300 p-3">Rotation Period</th>
            <th className="border border-slate-300 p-3">Orbital Period</th>
            <th className="border border-slate-300 p-3">Diameter</th>
            <th className="border border-slate-300 p-3">Climate</th>
            <th className="border border-slate-300 p-3">Gravity</th>
            <th className="border border-slate-300 p-3">Terrain</th>
            <th className="border border-slate-300 p-3">Surface Water</th>
            <th className="border border-slate-300 p-3">Population</th>
            <th className="border border-slate-300 p-3">Films</th>
            <th className="border border-slate-300 p-3">Created</th>
            <th className="border border-slate-300 p-3">Edited</th>
            <th className="border border-slate-300 p-3">Url</th>
          </tr>
        </thead>

        <tbody>
          {planets.map((planet) => (
            <tr key={ planet.name }>
              <td className="border border-slate-300 p-3">{ planet.name }</td>
              <td className="border border-slate-300 p-3">{ planet.rotation_period }</td>
              <td className="border border-slate-300 p-3">{ planet.orbital_period }</td>
              <td className="border border-slate-300 p-3">{ planet.diameter }</td>
              <td className="border border-slate-300 p-3">{ planet.climate }</td>
              <td className="border border-slate-300 p-3">{ planet.gravity }</td>
              <td className="border border-slate-300 p-3">{ planet.terrain }</td>
              <td className="border border-slate-300 p-3">{ planet.surface_water }</td>
              <td className="border border-slate-300 p-3">{ planet.population }</td>
              <td className="border border-slate-300 p-3">{ planet.films }</td>
              <td className="border border-slate-300 p-3">{ planet.created }</td>
              <td className="border border-slate-300 p-3">{ planet.edited }</td>
              <td className="border border-slate-300 p-3">{ planet.url }</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default Table;
