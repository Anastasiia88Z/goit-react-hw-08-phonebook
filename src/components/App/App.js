import Container from '../Container/Container';
import Form from '../Form/Form.jsx';
import ListContacts from '../ListContacts/ListContacts.jsx';
import Filter from '../Filter/Filter.jsx';
import s from './App.module.css';

export default function App() {
  return (
    <Container>
      <h1 className={s.title}>Phonebook</h1>
      <Form />
      <h2 className={s.contacts}>Contacts</h2>
      <Filter />
      <ListContacts />
    </Container>
  );
}
