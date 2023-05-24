import {render, screen, within} from '@testing-library/react';
import App from './App';

jest.mock("./gateways/menuGateway", () => ({
      getPizzaList : () => (
        [
          {name: "Carbonara"},
          {name: "Barbeque"}
        ]
      ),
      getDessertList : () => (
          [
           { name : "Vanilla icecream" }
          ]
      )
    })
);

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

  it("render Carbonara in Pizza section", () => {
    render(<App/>)
    const carbonara = screen.getByText("Carbonara")
    expect(carbonara).toBeInTheDocument()
  })

  it("render Barbeque in Pizza section", () => {
    render(<App/>)
    const barbeque = screen.getByText("Barbeque")
    expect(barbeque).toBeInTheDocument()
  })

  it("render Dessert section in Menu", () =>{
    render(<App/>)
    const dessertSection = screen.getByText("Dessert")
    expect(dessertSection).toBeInTheDocument()
  })

  it("render Vanilla icecream on the dessert section", () => {
    render(<App/>)
    const vanilla = screen.getByText("Vanilla icecream")
    expect(vanilla).toBeInTheDocument()
  })

  it("render Vanilla icecream UNDER the dessert section", () => {
    render(<App/>)
    // eslint-disable-next-line testing-library/no-node-access
    const dessertSection = within(screen.getByText("Dessert").parentNode)
    const vanilla = dessertSection.getByText("Vanilla icecream")
    expect(vanilla).toBeInTheDocument()
  })
});