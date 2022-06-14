import React, { useContext } from 'react';
import planetsContext from '../../context/planetsContext';

import Input from '../Input';

function NameFilter() {
  const {
    filterByName: { name },
    setFilterByName,
  } = useContext(planetsContext);

  return (
    <Input
      id="name-filter"
      testId="name-filter"
      label="Planet name"
      type="text"
      value={ name }
      onChange={ setFilterByName }
    />
  );
}

export default NameFilter;
