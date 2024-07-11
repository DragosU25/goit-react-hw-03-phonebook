import React from 'react';
import styles from './FormButton.module.css';

function SubmitButton() {
  return (
    <button type="submit" className={styles.button}>
      Add Contact
    </button>
  );
}

export default SubmitButton;
