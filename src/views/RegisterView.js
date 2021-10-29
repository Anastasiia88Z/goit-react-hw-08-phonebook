import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Col, Row, Button, Container } from 'react-bootstrap';
import { register } from '../redux/auth/auth-operations';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (name, email, password) =>
    dispatch(register({ name, email, password }));

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, email, password);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                required
                value={name}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Form.Label>Email</Form.Label>
          <Row>
            <Col>
              <Form.Control
                type="email"
                name="email"
                required
                value={email}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Form.Label>Password</Form.Label>
          <Row>
            <Col>
              <Form.Control
                type="password"
                name="password"
                required
                value={password}
                onChange={handleChange}
                pattern=".{8,}"
                title="Password must be minimum 8 numbers"
              />
            </Col>
          </Row>
        </Form.Group>

        <Row>
          <Col>
            <Button type="submit">Sign Up</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
