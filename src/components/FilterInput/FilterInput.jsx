import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

function Filter({ filter, handleFilterChange }) {
  return (
    <input
      type="text"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Type to search"
      className={styles.input}
    />
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
