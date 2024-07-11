import React from 'react';
import PropTypes from 'prop-types';
import styles from './FormLabel.module.css';

function FormLabel({ title }) {
  return <label className={styles.label}>{title}</label>;
}

FormLabel.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FormLabel;
