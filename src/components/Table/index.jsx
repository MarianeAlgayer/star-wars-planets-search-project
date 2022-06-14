import React, { useContext } from 'react';
import planetsContext from '../../context/planetsContext';

import './style.css';

const HEADERS = [
  'Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate', 'Gravity',
  'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'URL',
];

function Table() {
  const {
    filteredPlanets,
  } = useContext(planetsContext);

  return (
    <section id="table-wrapper">
      <table>
        <thead>
          <tr>
            { HEADERS.map((header) => <th key={ header }>{ header }</th>)}
          </tr>
        </thead>
        <tbody>
          { filteredPlanets
            .map((planet) => (
              <tr key={ planet.name }>
                { Object.values(planet).map((value) => <td key={ value }>{ value }</td>)}
              </tr>))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
