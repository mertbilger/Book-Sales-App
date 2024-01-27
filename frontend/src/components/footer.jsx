import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={4} >
            <h3 className="text-light">Şirket Adı</h3>
            <p>Şirketinizle ilgili kısa açıklama.</p>
          </Col>
          <Col md={4}>
            <h3 className="text-light">Linkler</h3>
            <ul className="list-unstyled">
            </ul>
          </Col>
          <Col md={4}>
            <h3 className="text-light">İletişim Bilgileri</h3>
            <p>Adres: ABC Sokak No: 123<br />Telefon: (123) 456-7890<br />E-posta: info@example.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
