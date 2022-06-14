import React from 'react';

import NameFilter from '../NameFilter';
import NumericValuesFilter from '../NumericValuesFilter';
import FiltersList from '../FiltersList';

import './style.css';

function PlanetsSearch() {
  return (
    <section id="filters">
      <div id="filters-wrapper">
        <NameFilter />
        <NumericValuesFilter />
      </div>

      <FiltersList />
    </section>
  );
}

export default PlanetsSearch;
