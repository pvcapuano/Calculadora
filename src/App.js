import React, { useState } from "react"
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

  const [ txtNumeros, setTxtNumeros ] = useState('0')

  const adicionarNumero = (numero) => {
    setTxtNumeros(txtNumeros + numero)
  }

  const definirOperacao = (op) => {
    setTxtNumeros(op)
  }

  return (
    <div className="fundo">
    <h1>Calculadora</h1>
    <Card border="light" style={{
      background: 'tranparente !important',
      backgroundColor: "#242730",
      padding: "20px",
      margin: "30px",
      width: "300px",
      borderRadius: "5px" 
    }}>
    <Container
      style={{
        padding: "1px",
        
      }}
    >
      <Row>
          <Col>
          <Form.Control type="text"
          name="txtNumeros"
          readOnly="readonly"
          value={txtNumeros} 
          style={{
            textAlign: "right"
          }}
          />
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
          <Button variant="warning"
          onClick={() => definirOperacao("/")}
          >/</Button>
        </Col>
      </Row>

      <Row>
        <Col xs="3">
          <Button variant="secondary"
          onClick={() => adicionarNumero('7')}
          >7</Button>
        </Col>
        <Col xs="3">
          <Button variant="secondary"
          onClick={() => adicionarNumero('8')}
          >8</Button>
        </Col>
        <Col xs="3">
          <Button variant="secondary"
          onClick={() => adicionarNumero('9')}
          >9</Button>
        </Col>
        <Col xs="3">
          <Button variant="warning"
          onClick={() => definirOperacao("*")}
          >x</Button>
        </Col>
      </Row>

      <Row>
        <Col xs="3">
          <Button variant="secondary"
          onClick={() => adicionarNumero('4')}
          >4</Button>
        </Col>
        <Col xs="3">
          <Button variant="secondary"
          onClick={() => adicionarNumero('5')}
          >5</Button>
        </Col>
        <Col xs="3">
          <Button variant="secondary"
          onClick={() => adicionarNumero('6')}
          >6</Button>
        </Col>
        <Col xs="3">
          <Button variant="warning"
          onClick={() => definirOperacao("-")}
          >-</Button>
        </Col>
      </Row>

      <Row>
        <Col xs="3">
          <Button variant="secondary"
          onClick={() => adicionarNumero('1')}
          >1</Button>
        </Col>
        <Col xs="3">
          <Button variant="secondary"
          onClick={() => adicionarNumero('2')}
          >2</Button>
        </Col>
        <Col xs="3">
          <Button variant="secondary"
          onClick={() => adicionarNumero('3')}
          >3</Button>
        </Col>
        <Col xs="3">
          <Button variant="warning"
          onClick={() => definirOperacao("+")}
          >+</Button>
        </Col>
      </Row>

      <Row>
        <Col xs="6">
          <Button variant="secondary"
          onClick={() => adicionarNumero('0')}
          >0</Button>
        </Col>
        <Col xs="3">
          <Button variant="secondary">,</Button>
        </Col>
        <Col xs="3">
          <Button variant="success">=</Button>
        </Col>
      </Row>

    </Container>
      
    </Card>
    </div>
  );
}

export default App;
