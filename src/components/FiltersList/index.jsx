import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import planetsContext from '../../context/planetsContext';

import Button from '../Button';

import { COLUMN_OPTIONS } from '../../utils/constants';

function FiltersList() {
  const {
    filterByNumericValues,
    setFilterByNumericValues,
    columnOptions,
    setColumnOptions,
  } = useContext(planetsContext);

  const removeFilter = ({ currentTarget }) => {
    const { id } = currentTarget.parentNode;

    const currentFilters = filterByNumericValues.filter((filter) => filter.column !== id);

    setFilterByNumericValues(currentFilters);
    setColumnOptions([...columnOptions, id]);
  };

  const removeAllFilters = () => {
    setFilterByNumericValues([]);
    setColumnOptions(COLUMN_OPTIONS);
  };

  return (
    <div id="filters-list">
      { filterByNumericValues.length > 0
        && (
          <div className="title-wrapper">
            <h2>Applied filters</h2>

            <Button
              testId="button-remove-filters"
              onClick={ removeAllFilters }
              label="REMOVE ALL FILTERS"
            />
          </div>
        )}

      { filterByNumericValues
        .map((filter, index) => (
          <div
            key={ index }
            className="applied-filter"
            id={ filter.column }
            data-testid="filter"
          >
            <p>
              {`${filter.column} | ${filter.comparison} | ${filter.value}`}
            </p>

            <Button
              onClick={ removeFilter }
              label={ <FaTrash /> }
            />
          </div>
        ))}
    </div>
  );
}

export default FiltersList;
