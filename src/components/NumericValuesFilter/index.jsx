import React, { useContext, useState } from 'react';
import planetsContext from '../../context/planetsContext';

import Button from '../Button';
import Select from '../Select';
import Input from '../Input';

const COLUMN_OPTIONS = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];

const COMPARISON_OPTIONS = [
  'maior que', 'menor que', 'igual a',
];

function NumericValuesFilter() {
  const {
    filterByNumericValues,
    setFilterByNumericValues,
  } = useContext(planetsContext);

  const [columnOptions, setColumnOptions] = useState(COLUMN_OPTIONS);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const selectedOptions = {
      column,
      comparison,
      value: Number(value),
    };

    setFilterByNumericValues([...filterByNumericValues, selectedOptions]);

    const currentOptions = columnOptions.filter((option) => (
      option !== selectedOptions.column
    ));

    setColumnOptions(currentOptions);
    setColumn(currentOptions[0]);
  };

  return (
    <form onSubmit={ handleSubmit }>
      <Select
        id="column-filter"
        testId="column-filter"
        label="Column"
        value={ column }
        onChange={ setColumn }
        options={ columnOptions }
      />

      <Select
        id="comparison-filter"
        testId="comparison-filter"
        label="Comparison"
        value={ comparison }
        onChange={ setComparison }
        options={ COMPARISON_OPTIONS }
      />

      <Input
        id="value-filter"
        testId="value-filter"
        label="Value"
        type="number"
        value={ value }
        onChange={ setValue }
      />

      <Button testId="button-filter" label="FILTER" />
    </form>
  );
}

export default NumericValuesFilter;
