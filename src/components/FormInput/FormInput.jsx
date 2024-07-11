import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormInput.module.css';

function FormInput({ type, name, pattern, title, value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      pattern={pattern}
      title={title}
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  );
}

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormInput;
