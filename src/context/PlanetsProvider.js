import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import planetsContext from './planetsContext';
import fetchPlanets from '../utils/fetchPlanets';
import filterPlanets from '../utils/filterPlanets';

function PlanetsProvider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filteredPlanets, setFilteredPlanets] = useState(planetsData);

  useEffect(() => {
    (async () => {
      const results = await fetchPlanets();
      setPlanetsData(results);
    })();
  }, []);

  useEffect(() => {
    const results = filterPlanets(planetsData, filterByName);
    setFilteredPlanets(results);
  }, [planetsData, filterByName]);

  const state = {
    filterByName,
    setFilterByName,
    filteredPlanets,
  };

  return (
    <planetsContext.Provider value={ state }>
      { children }
    </planetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
