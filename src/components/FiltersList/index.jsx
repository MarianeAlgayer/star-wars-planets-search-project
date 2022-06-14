import React, { useContext } from 'react';
import planetsContext from '../../context/planetsContext';

function FiltersList() {
  const { filterByNumericValues } = useContext(planetsContext);
  return (
    <div id="filters-list">
      { filterByNumericValues.length > 0 && <h2>Applied filters</h2>}

      { filterByNumericValues
        .map((filter, index) => (
          <div key={ index } className="filter">
            <p>
              {`${filter.column} | ${filter.comparison} | ${filter.value}`}
            </p>
            <button type="button">X</button>
          </div>
        ))}
    </div>
  );
}

export default FiltersList;
