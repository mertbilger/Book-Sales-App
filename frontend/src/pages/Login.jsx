import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useLogin } from "../hooks/useLogin"

const AdminLogin = () => {

  const [email, setEmail] = useState('')
  const [parola, setParola] = useState('')

  const { login, hata, yukleniyor } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, parola);
  }


  return (
    <Container onSubmit={handleSubmit} className="my-5">
      <Row className="justify-content-center">
        <Col md={4} className="bg-light p-4 rounded">
          <h2 className="mb-4 text-center">Admin Login</h2>
          <Form>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required onChange={(e) => setParola(e.target.value)} />
            </Form.Group>

            <Button className='mt-4 w-100' variant="primary" type="submit" block>
              Login
            </Button>
          </Form>
          {hata && <div className="alert alert-dismissible alert-danger mt-3">
            <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
            <strong>Tekrar Deneyiniz : </strong> {hata}
          </div>}
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLogin;
