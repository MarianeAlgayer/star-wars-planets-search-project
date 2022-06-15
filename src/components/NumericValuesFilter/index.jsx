import React, { useContext, useState } from 'react';
import planetsContext from '../../context/planetsContext';

import Button from '../Button';
import Select from '../Select';
import Input from '../Input';

import { COMPARISON_OPTIONS } from '../../utils/constants';

function NumericValuesFilter() {
  const {
    filterByNumericValues,
    setFilterByNumericValues,
    columnOptions,
    setColumnOptions,
  } = useContext(planetsContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (column === undefined) {
      return;
    }

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

      <Button
        type="submit"
        testId="button-filter"
        className="button-filter"
        label="FILTER"
      />
    </form>
  );
}

export default NumericValuesFilter;
