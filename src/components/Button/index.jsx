import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Button = ({ type, testId, onClick, label }) => (
  <button
    type={ type ? 'submit' : 'button' }
    data-testid={ testId }
    onClick={ onClick }
  >
    {' '}
    {label}
    {' '}
  </button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  testId: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
};

Button.defaultProps = { testId: '', onClick: null };

export default Button;
