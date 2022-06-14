import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Input = ({ id, testId, label, type, value, onChange }) => (
  <label htmlFor={ id }>
    {' '}
    {label}
    {' '}
    <input
      id={ id }
      data-testid={ testId }
      type={ type }
      value={ value }
      onChange={ ({ target }) => (
        id === 'name-filter'
          ? onChange({ name: target.value })
          : onChange(target.value)) }
    />
  </label>
);

Input.propTypes = {
  id: PropTypes.string,
  testId: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Input;
