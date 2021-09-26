import React from 'react';
import s from './ListContacts.module.css';
import PropTypes from 'prop-types';

const ListContacts = ({ contacts, onDelete }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={s.item}>
        {name} : {number}
        <button className={s.button} type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);
export default ListContacts;

ListContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func.isRequired,
};
