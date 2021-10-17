import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts-actions';
import { getVisibleContacts } from '../../redux/contacts-selectors';
import s from './ListContacts.module.css';

function ListContacts() {
  const dispatch = useDispatch();

  const contacts = useSelector(getVisibleContacts);
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          {name} : {number}
          <button
            className={s.button}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
export default ListContacts;
