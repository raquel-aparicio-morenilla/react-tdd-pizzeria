import { render, screen } from '@testing-library/react';
import App from './App';

describe("render App", () => {
  it('render menu', () => {
    render(<App />);
    const menu = screen.getByText("Menu");
    expect(menu).toBeInTheDocument();
  });

  it("render Pizza under Menu", () => {
    render(<App/>)
    const pizzaSection = screen.getByText("Pizza")
    expect(pizzaSection).toBeInTheDocument()
  })

  it("render Carbonara in Pizza section", () =>{
    render(<App/>)
    const carbonara = screen.getByText("Carbonara")
    expect(carbonara).toBeInTheDocument()
  })
});