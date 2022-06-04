import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import planetsContext from './planetsContext';
import fetchPlanets from '../utils/fetchPlanets';

function PlanetsProvider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);

  useEffect(() => {
    (async () => {
      const results = await fetchPlanets();
      setPlanetsData(results);
    })();
  }, []);

  const state = {
    planetsData,
    setPlanetsData,
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
