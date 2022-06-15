import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import planetsContext from './planetsContext';
import fetchPlanets from '../utils/fetchPlanets';
import filterPlanets from '../utils/filterPlanets';

import { COLUMN_OPTIONS } from '../utils/constants';

function PlanetsProvider({ children }) {
  const [planetsData, setPlanetsData] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState(planetsData);
  const [columnOptions, setColumnOptions] = useState(COLUMN_OPTIONS);

  useEffect(() => {
    (async () => {
      const results = await fetchPlanets();
      setPlanetsData(results);
    })();
  }, []);

  useEffect(() => {
    const results = filterPlanets(planetsData, filterByName, filterByNumericValues);
    setFilteredPlanets(results);
  }, [planetsData, filterByName, filterByNumericValues]);

  const state = {
    filterByName,
    setFilterByName,
    filterByNumericValues,
    setFilterByNumericValues,
    filteredPlanets,
    columnOptions,
    setColumnOptions,
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
