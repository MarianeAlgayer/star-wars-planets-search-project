import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Button = ({ testId, label }) => (
  <button
    type="submit"
    data-testid={ testId }
    className="button"
  >
    {' '}
    {label}
    {' '}
  </button>
);

Button.propTypes = {
  testId: PropTypes.string,
  label: PropTypes.string,
}.isRequired;

export default Button;
