import React from "react"
import './App.css';
import { 
  Card, 
  Container, 
  Row, 
  Col,
  Button,
  Form 
} from "react-bootstrap"


function App() {
  return (
    <>
    <h1>Calculadora</h1>
    <Card style={{
      background: 'tranparente !important',
      backgroundColor: "#242730",
      padding: "10px",
      width: "400px",
      borderRadius: "0px"
    }}>
    <Container>
      <Row>
          <Col>
          <Form.Control type="text"
          name="txtNumeros"
          class="text-right"
          readOnly="readonly" />
          </Col>
      </Row>

      <Row>
        <Col xs="6">
          <Button variant="secondary">C</Button>
        </Col>
        <Col xs="3">
          <Button variant="secondary">%</Button>
        </Col>
        <Col xs="3">
          <Button variant="secondary">/</Button>
        </Col>
      </Row>

      <Row>
        <Col xs="3">
          <Button variant="secondary">7</Button>
        </Col>
        <Col xs="3">
          <Button variant="secondary">8</Button>
        </Col>
        <Col xs="3">
          <Button variant="secondary">9</Button>
        </Col>
        <Col xs="3">
          <Button variant="secondary">x</Button>
        </Col>
      </Row>

      <Row>
        <Col xs="3">
          <Button variant="secondary">4</Button>
        </Col>
        <Col xs="3">
          <Button variant="secondary">5</Button>
        </Col>
        <Col xs="3">
          <Button variant="secondary">6</Button>
        </Col>
        <Col xs="3">
          <Button variant="secondary">-</Button>
        </Col>
      </Row>

      <Row>
        <Col xs="3">
          <Button variant="secondary">1</Button>
        </Col>
        <Col xs="3">
          <Button variant="secondary">2</Button>
        </Col>
        <Col xs="3">
          <Button variant="secondary">3</Button>
        </Col>
        <Col xs="3">
          <Button variant="secondary">+</Button>
        </Col>
      </Row>

      <Row>
        <Col xs="6">
          <Button variant="secondary">0</Button>
        </Col>
        <Col xs="3">
          <Button variant="secondary">,</Button>
        </Col>
        <Col xs="3">
          <Button variant="secondary">=</Button>
        </Col>
      </Row>

    </Container>
      
    </Card>
    </>
  );
}

export default App;
