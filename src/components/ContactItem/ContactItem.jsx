import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

function ContactItem({ contact, deleteContact }) {
  return (
    <li className={styles.item}>
      {contact.name} : {contact.number}
      <button
        className={styles.deleteButton}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
}
ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
