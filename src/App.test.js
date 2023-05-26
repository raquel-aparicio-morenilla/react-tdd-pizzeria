import {render, screen, within} from '@testing-library/react';
import App from './App';

jest.mock("./gateways/menuGateway", () => ({
    retrievePizzaList : () => (
            [
                "Carbonara",
                "Barbeque"
            ]
        )
    })
);

describe("render Application", () => {
  it('renders Menu', () => {
    render(<App/>);
    const menu = screen.getByText("Menu");
    expect(menu).toBeInTheDocument();
  });

  it("render Pizza section", () => {
    render(<App/>)
    const menu = screen.getByLabelText("Menu");
    const pizza = within(menu).getByText("Pizza")
    expect(pizza).toBeInTheDocument()
  })

  it("render Carbonara pizza", () => {
    render(<App/>)
    const carbonara = screen.getByText("Carbonara")
    expect(carbonara).toBeInTheDocument()
  })

  it("render Barbeque pizza", () => {
    render(<App/>)
    const barbeque = screen.getByText("Barbeque")
    expect(barbeque).toBeInTheDocument()
  })
})
