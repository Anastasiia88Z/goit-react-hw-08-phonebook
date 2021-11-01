import { changeFilter } from '../../redux/contacts/contacts-actions';
import { useSelector, useDispatch } from 'react-redux';
import {
  getFilter,
  getContacts,
} from '../../redux/contacts/contacts-selectors';
import PropTypes from 'prop-types';
import { Form, Container } from 'react-bootstrap';

const Filter = () => {
  const contacts = useSelector(getContacts);
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeHandler = event => dispatch(changeFilter(event.target.value));
  const onBlurHandler = () => dispatch(changeFilter(''));

  if (contacts.length === 0) {
    return <h2 style={{ display: 'none' }}>Search</h2>;
  } else {
    return (
      <Container>
        <Form>
          <Form.Group>
            <h2>Find contacts by name</h2>
            <Form.Control
              type="text"
              value={value}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
            />
          </Form.Group>
        </Form>
      </Container>
    );
  }
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
