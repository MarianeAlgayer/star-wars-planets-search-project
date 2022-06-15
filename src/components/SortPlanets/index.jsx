import React, { useContext, useState } from 'react';
import planetsContext from '../../context/planetsContext';

import Button from '../Button';
import Select from '../Select';
import Input from '../Input';

import { COLUMN_OPTIONS } from '../../utils/constants';

function SortPlanets() {
  const {
    setSortPlanetsOrder,
  } = useContext(planetsContext);

  const [column, setColumn] = useState('population');
  const [sort, setSort] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const selectedOptions = {
      column,
      sort,
    };

    setSortPlanetsOrder({
      order: selectedOptions,
    });
  };

  return (
    <form onSubmit={ handleSubmit }>
      <Select
        id="column-sort"
        testId="column-sort"
        label="Sort"
        value={ column }
        onChange={ setColumn }
        options={ COLUMN_OPTIONS }
      />

      <div className="radio-buttons-wrapper">
        <Input
          id="column-sort-input-asc"
          testId="column-sort-input-asc"
          label="Ascendente"
          type="radio"
          value="ASC"
          name="column-sort"
          onChange={ setSort }
        />

        <Input
          id="column-sort-input-desc"
          testId="column-sort-input-desc"
          label="Descendente"
          type="radio"
          value="DESC"
          name="column-sort"
          onChange={ setSort }
        />
      </div>

      <Button
        type="submit"
        testId="column-sort-button"
        label="SORT"
      />
    </form>
  );
}

export default SortPlanets;
