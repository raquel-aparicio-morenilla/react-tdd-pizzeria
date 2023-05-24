import {render, screen, within} from '@testing-library/react';
import App from './App';

jest.mock("./gateways/menuGateway", () => ({
      getPizzaList : () => (
        [
          {name: "Carbonara", imageName: "Carbonara.png"},
          {name: "Barbeque", imageName: "Barbeque.png"}
        ]
      ),
      getDessertList : () => (
          [
           { name : "Vanilla icecream", imageName: "VanillaIcecream.png"}
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

  it("render images for the 2 pizzas", () =>{
    render(<App/>)
    const imageList = screen.getAllByRole("img", {name: /pizza/i});
    expect(imageList).toHaveLength(2)
    const altList = imageList.map(pizzaImage => pizzaImage.alt)
    expect(altList).toContain("Carbonara pizza")
    expect(altList).toContain("Barbeque pizza")
    expect(altList).toEqual(expect.arrayContaining(["Carbonara pizza", "Barbeque pizza"]))

    const srcList = imageList.map(pizzaImage => pizzaImage.src)
    expect(srcList).toEqual(expect.arrayContaining([expect.stringContaining("assets/Carbonara.png"), expect.stringContaining("assets/Barbeque.png")]))
  })

  it("renders images for the dessert", () =>{
    render(<App/>)
    const imageList= screen.getAllByRole("img", {name: /dessert/i})
    expect(imageList).toHaveLength(1)
    const altList = imageList.map(image => image.alt)
    expect(altList).toEqual(["Vanilla icecream dessert"])
    const srcList= imageList.map(image => image.src)
    expect(srcList).toEqual([expect.stringContaining("assets/VanillaIcecream.png")])
  })

  it("renders spinners for the menu items with an initial value of 0", () => {
    render(<App/>)
    const spinnerList = screen.getAllByRole("spinbutton")
    expect(spinnerList).toHaveLength(3)
    spinnerList.forEach(spinner => expect(spinner.value).toBe(0))
  })
});