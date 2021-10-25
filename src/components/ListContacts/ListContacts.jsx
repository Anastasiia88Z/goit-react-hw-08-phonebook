import React, { useEffect } from 'react';
import * as contactsOperation from '../../redux/contacts-operation';
import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts-selectors';
import s from './ListContacts.module.css';
import PropTypes from 'prop-types';

const ListContacts = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContacts = id =>
    dispatch(contactsOperation.deleteContactsAction(id));

  useEffect(() => {
    dispatch(contactsOperation.fetchContactsAction());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          {name} : {number}
          <button
            className={s.button}
            type="button"
            onClick={() => onDeleteContacts(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ListContacts;

ListContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onDeleteContacts: PropTypes.func,
};
