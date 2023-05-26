import { render, screen } from '@testing-library/react';
import App from './App';


describe("render Application", () => {
  it('renders Menu', () => {
    render(<App/>);
    const menu = screen.getByText("Menu");
    expect(menu).toBeInTheDocument();
  });

  it("render Pizza section", () => {
    render(<App/>)
    const pizza = screen.getByText("Pizza")
    expect(pizza).toBeInTheDocument()
  })
})
