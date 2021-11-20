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
import CalculadoraService from './calculadora.service'



function App() {

  const [calcular, concatenarNumero, SOMA, SUBTRACAO, DIVISAO, MULTIPLICACAO] = CalculadoraService()


  const [ txtNumeros, setTxtNumeros ] = useState('0')
  const [ numero1, setNumero1 ] = useState('0')
  const [ numero2, setNumero2 ] = useState(null)
  const [ operacao, setOperacao ] = useState(null)

  const adicionarNumero = (numero) => {
    let resultado 
    if(operacao === null){
      resultado = concatenarNumero(numero1, numero)
      setNumero1(resultado)
    } else {
      resultado = concatenarNumero(numero2, numero)
      setNumero2(resultado)
    }
    setTxtNumeros(resultado)
  }

  const definirOperacao = (op) => {
    // apenas define a operação caso ela não exista
    if (operacao === null) {
      setOperacao(op)
      return
    }

    // caso a operação estiver definida e número 2 selecionado, realiza o cálculo da operação
    if (numero2 !== null) {
      const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao)
      setOperacao(op)
      setNumero1(resultado.toString())
      setNumero2(null)
      setTxtNumeros(resultado.toString())
    }

  }

  function acaoCalcular() {
    if (numero2 === null) {
      return
    }
    const resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao)
    setTxtNumeros(resultado)
  }

  function limpar() {
    setTxtNumeros('0')
    setNumero1('0')
    setNumero2(null)
    setOperacao(null)
  }

  return (
    <div className="fundo">
    <h1>Calculadora</h1>
    <Card border="light" style={{
      background: 'tranparente !important',
      backgroundColor: "#242730",
      padding: "20px",
      margin: "20px",
      width: "300px",
      borderRadius: "5px" 
    }}>
    <Container
      style={{
        padding: "10px"
        
      }}
    >
      <Row>
          <Col>
          <Form.Control type="text"
          name="txtNumeros"
          readOnly="readonly"
          value={txtNumeros} 
          data-testid="txtNumeros"
          style={{
            textAlign: "right"
          }}
          />
          </Col>
      </Row>

      <Row style={{marginTop: '10px'}}>
        <Col xs="9">
          <Button variant="secondary"
          onClick={limpar}
          >C</Button>
        </Col>
        <Col xs="3">
          <Button variant="warning"
          onClick={() => definirOperacao(DIVISAO)}
          >/</Button>
        </Col>
      </Row>

      <Row style={{marginTop: '10px'}}>
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
          onClick={() => definirOperacao(MULTIPLICACAO)}
          >x</Button>
        </Col>
      </Row>

      <Row style={{marginTop: '10px'}}>
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
          onClick={() => definirOperacao(SUBTRACAO)}
          >-</Button>
        </Col>
      </Row>

      <Row style={{marginTop: '10px'}}>
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
          onClick={() => definirOperacao(SOMA)}
          >+</Button>
        </Col>
      </Row>

      <Row style={{marginTop: '10px'}}>
        <Col xs="6">
          <Button variant="secondary"
          onClick={() => adicionarNumero('0')}
          >0</Button>
        </Col>
        <Col xs="3">
          <Button variant="secondary"
          onClick={() => adicionarNumero('.')}
          >.</Button>
        </Col>
        <Col xs="3">
          <Button variant="success"
          onClick={acaoCalcular}
          >=</Button>
        </Col>
      </Row>

    </Container>
      
    </Card>
    </div>
  );
}

export default App;
