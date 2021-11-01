import { useState } from 'react';
import * as contactsOperation from '../../redux/contacts/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Col, Row, Button } from 'react-bootstrap';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import s from '../App/App.module.css';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onSubmit = (name, number) =>
    dispatch(contactsOperation.addContactsAction({ name, number }));

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const checkName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (checkName(name)) {
      alert(`${name} is already in contacts`);
    } else {
      onSubmit(name, number);
      setName('');
      setNumber('');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <h2>Add new contact</h2>
          <Form.Label>Name</Form.Label>
          <Row>
            <Col>
              <Form.Control
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                value={name}
                onChange={handleChange}
                placeholed="Enter your name"
                className={s.form}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Telephone</Form.Label>
              <Form.Control
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                value={number}
                onChange={handleChange}
                placeholed="Enter your telephone"
                className={s.form}
              />
            </Col>
          </Row>
        </Form.Group>
        <Row>
          <Col>
            <Button type="submit" className="s.btn-primary">
              Add to contact list
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default ContactForm;
