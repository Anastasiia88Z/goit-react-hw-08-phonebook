import React, { useEffect } from 'react';
import * as contactsOperation from '../../redux/contacts/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import { Container, Button, ListGroupItem } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ListContacts = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperation.fetchContactsAction());
  }, [dispatch]);

  const onDeleteContacts = id =>
    dispatch(contactsOperation.deleteContactsAction(id));

  if (contacts.length === 0) {
    return <h2 className="home-title">There are no contacts in the list</h2>;
  } else {
    return (
      <Container>
        <h2>List of contacts</h2>
        {contacts.map(({ id, name, number }) => (
          <ListGroupItem key={id}>
            {name} : {number}
            <Button onClick={() => onDeleteContacts(id)}>Delete</Button>
          </ListGroupItem>
        ))}
      </Container>
    );
  }
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
