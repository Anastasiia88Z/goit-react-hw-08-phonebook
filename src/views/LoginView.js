import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/auth-operations';
import { Form, Col, Row, Button, Container } from 'react-bootstrap';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (email, password) => dispatch(logIn({ email, password }));

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Email</Form.Label>
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
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Button type="submit">Sign In</Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Container>
  );
}
