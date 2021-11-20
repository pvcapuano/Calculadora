import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Calculadora', () => {

test('Deve renderizar o componente sem erros', () => {
  render(<App />);
  const linkElement = screen.getByText(/Calculadora/i);
  expect(linkElement).toBeInTheDocument();
})

})
