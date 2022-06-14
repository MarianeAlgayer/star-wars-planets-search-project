import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Select = ({ id, testId, label, value, onChange, options }) => (
  <label htmlFor={ id }>
    {' '}
    {label}
    {' '}
    <select
      id={ id }
      data-testid={ testId }
      value={ value }
      onChange={ ({ target }) => onChange(target.value) }
    >
      { options.map((option) => <option key={ option }>{ option }</option>) }
    </select>
  </label>
);

Select.propTypes = {
  id: PropTypes.string,
  testId: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
}.isRequired;

export default Select;
