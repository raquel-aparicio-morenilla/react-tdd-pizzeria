import {render, screen, within} from '@testing-library/react';
import App from './App';

jest.mock("./gateways/menuGateway", () => ({
    retrievePizzaList : () => (
            [
                {name:"Carbonara"},
                {name:"Barbeque"}
            ]
        ),
    retrieveDessertList : () => (
        [
            {name:"Vanilla icecream"}
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

    it("render Dessert section", () => {
        render(<App/>)
        const menu = screen.getByLabelText("Menu");
        const dessert = within(menu).getByText("Dessert")
        expect(dessert).toBeInTheDocument()
    })

    it("render Vanilla icecream", () => {
        render(<App/>)
        const icecream = screen.getByText("Vanilla icecream")
        expect(icecream).toBeInTheDocument()
    })

    it("render images for each of the menu items", () => {
        render(<App/>)
        const imageList = screen.getAllByRole("img");
        expect(imageList).toHaveLength(3)
        imageList.forEach(
            image => expect(image).toHaveAttribute("src", expect.stringMatching(/^assets\//))
        )
    })
    it("render images for the dessert item", () => {
        render(<App/>)
        const imageList = screen.getAllByRole("img",{name: "Deliciouss Vanilla icecream dessert"});
        expect(imageList).toHaveLength(1)
        imageList.forEach(
            image => expect(image).toHaveAttribute("src", expect.stringMatching(/^assets\//))
        )
    })
    it('should render the price for each menu item', function () {
        render(<App/>)

    });
})
