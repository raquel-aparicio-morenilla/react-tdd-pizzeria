import {render, screen, waitFor, within} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

jest.mock("./gateways/menuGateway", () => ({
      getPizzaList : () => (
        [
          {name: "Carbonara", imageName: "Carbonara.png", price: 15},
          {name: "Barbeque", imageName: "Barbeque.png", price: 17}
        ]
      ),
      getDessertList : () => (
          [
           { name : "Vanilla icecream", imageName: "VanillaIcecream.png", price: 5}
          ]
      )
    })
);

describe("render App", () => {
  describe("render Menu section", () => {
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
      const dessertSection = screen.getByLabelText("dessertSection")
      const vanilla = within(dessertSection).getByText("Vanilla icecream")
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
      spinnerList.forEach(spinner => expect(spinner.value).toBe("0"))
    })

    it("update spinner value with user input", async () => {
      render(<App/>)
      const spinnerCarbonara = screen.getByRole("spinbutton", {name: "Carbonara pizza"})
      userEvent.type(spinnerCarbonara,"3")
      await waitFor(() => expect(spinnerCarbonara.valueAsNumber).toBe(3))
    })

    it("renders price for the menu items", () => {
      render(<App/>)
      const priceList = screen.getAllByLabelText(/-price$/)
      expect(priceList).toHaveLength(3)
      const carbonaraPrice = screen.getByLabelText("Carbonara-pizza-price")
      expect(carbonaraPrice).toHaveTextContent("15")
    })
  })

  describe("render Order Summary", () =>{
    it("render Summary", () => {
      render(<App/>)
      const summary = screen.getByText("Order Summary")
      expect(summary).toBeInTheDocument()
    })

    it("render button to place order", () => {
      render(<App/>)
      const buttonPlaceOrder = screen.getByRole("button", {name: "Place your order"})
      expect(buttonPlaceOrder).toBeInTheDocument()
    })

    it("render checkbox for Terms and Conditions, initially unchecked", () => {
      render(<App/>)
      const checkboxTandC = screen.getByRole("checkbox",  {name: "Agree to Terms and Conditions"})
      expect(checkboxTandC).toBeInTheDocument()
      expect(checkboxTandC).not.toBeChecked()
    })

    it("render button disabled if checkbox is not checked", () => {
      render(<App/>)
      const checkboxTandC = screen.getByRole("checkbox",  {name: "Agree to Terms and Conditions"})
      expect(checkboxTandC).not.toBeChecked()
      const buttonPlaceOrder = screen.getByRole("button", {name: "Place your order"})
      expect(buttonPlaceOrder).toBeDisabled()
      const orderConfirmed = screen.queryByText("Your order has been confirmed")
      expect(orderConfirmed).not.toBeInTheDocument()
    })

    it("render button enabled when user checks checkbox", () => {
      render(<App/>)
      const checkboxTandC = screen.getByRole("checkbox",{name: "Agree to Terms and Conditions"})
      userEvent.click(checkboxTandC)
      expect(checkboxTandC).toBeChecked()
      const buttonPlaceOrder = screen.getByRole("button", {name: "Place your order"})
      expect(buttonPlaceOrder).toBeEnabled()
      const orderConfirmed = screen.queryByText("Your order has been confirmed")
      expect(orderConfirmed).not.toBeInTheDocument()
    })

    it("render Your order has been confirmed only when order button is clicked", async () => {
      render(<App/>)
      const checkboxTandC = screen.getByRole("checkbox", {name: "Agree to Terms and Conditions"})
      await userEvent.click(checkboxTandC)
      const buttonPlaceOrder = screen.getByRole("button", {name: "Place your order"})
      await userEvent.click(buttonPlaceOrder)
      const orderConfirmed = screen.getByText("Your order has been confirmed")
      expect(orderConfirmed).toBeInTheDocument()
    })

    it("render button disabled when order has been confirmed", async () => {
      render(<App/>)
      const checkboxTandC = screen.getByRole("checkbox", {name: "Agree to Terms and Conditions"})
      await userEvent.click(checkboxTandC)
      const buttonPlaceOrder = screen.getByRole("button", {name: "Place your order"})
      await userEvent.click(buttonPlaceOrder)
      expect(buttonPlaceOrder).toBeDisabled()
    })

    it("renders Empty cart on Order summary when user has not selected any item yet", () => {
      render(<App/>)
      const emptyCart = screen.getByText("Empty cart")
      expect(emptyCart).toBeInTheDocument()
    })

    it("do not render empty cart on Order summary when user has selected any item", () => {
      render(<App/>)
      const carbonaraSpinner = screen.getByRole("spinbutton", {name: "Carbonara pizza"})
      userEvent.type(carbonaraSpinner,"3")
      expect(carbonaraSpinner.valueAsNumber).toBe(3)
      const emptyCart = screen.queryByText("Empty cart")
      expect(emptyCart).not.toBeInTheDocument()
    })

    it("render Carbonara on Order summary when user updates Carbonara spinner", async () => {
      render(<App/>)
      const carbonaraSpinner = screen.getByRole("spinbutton", {name: "Carbonara pizza"})
      userEvent.type(carbonaraSpinner,"3")
      expect(carbonaraSpinner.valueAsNumber).toBe(3)
      const summary = screen.getByLabelText("orderSummarySection")

      const itemsOnSummary = within(summary).getAllByLabelText(/-shopping-cart$/)
      expect(itemsOnSummary).toHaveLength(1)

      const carbonaraOnSummary = within(summary).getByLabelText("Carbonara-shopping-cart")
      expect(carbonaraOnSummary).toBeInTheDocument()
      expect(within(carbonaraOnSummary).getByLabelText("itemName")).toHaveTextContent("Carbonara")
      expect(within(carbonaraOnSummary).getByLabelText("itemCount")).toHaveTextContent(3)
      expect(within(carbonaraOnSummary).getByLabelText("itemPrice")).toHaveTextContent(15)
      expect(within(carbonaraOnSummary).getByLabelText("itemTotalPrice")).toHaveTextContent(45)
    })

    it("render Carbonara and Barbeque on Order summary when user updates both spinners", () => {
      render(<App/>)
      const carbonaraSpinner = screen.getByRole("spinbutton", {name: "Carbonara pizza"})
      const barbequeSpinner = screen.getByRole("spinbutton", {name: "Barbeque pizza"})
      userEvent.type(carbonaraSpinner, "1")
      userEvent.type(barbequeSpinner,"2")

      const summary = screen.getByLabelText("orderSummarySection")
      const itemsOnSummary = within(summary).getAllByLabelText(/-shopping-cart$/)
      expect(itemsOnSummary).toHaveLength(2)

      const carbonaraOnSummary = screen.getByLabelText("Carbonara-shopping-cart")
      expect(within(carbonaraOnSummary).getByLabelText("itemName")).toHaveTextContent("Carbonara")
      expect(within(carbonaraOnSummary).getByLabelText("itemCount")).toHaveTextContent(1)
      expect(within(carbonaraOnSummary).getByLabelText("itemPrice")).toHaveTextContent(15)
      expect(within(carbonaraOnSummary).getByLabelText("itemTotalPrice")).toHaveTextContent(15)

      const barbequeOnSummary = screen.getByLabelText("Barbeque-shopping-cart")
      expect(within(barbequeOnSummary).getByLabelText("itemName")).toHaveTextContent("Barbeque")
      expect(within(barbequeOnSummary).getByLabelText("itemCount")).toHaveTextContent(2)
      expect(within(barbequeOnSummary).getByLabelText("itemPrice")).toHaveTextContent(17)
      expect(within(barbequeOnSummary).getByLabelText("itemTotalPrice")).toHaveTextContent(34)
    })

    it("update Carbonara count, when Carbonara and Barbeque are on Order summary", () => {
      render(<App/>)
      const carbonaraSpinner = screen.getByRole("spinbutton", {name: "Carbonara pizza"})
      const barbequeSpinner = screen.getByRole("spinbutton", {name: "Barbeque pizza"})
      userEvent.type(carbonaraSpinner, "1")
      userEvent.type(barbequeSpinner,"2")
      userEvent.clear(carbonaraSpinner)
      userEvent.type(carbonaraSpinner, "2")

      const summary = screen.getByLabelText("orderSummarySection")
      const itemsOnSummary = within(summary).getAllByLabelText(/-shopping-cart$/)
      expect(itemsOnSummary).toHaveLength(2)

      const carbonaraOnSummary = screen.getByLabelText("Carbonara-shopping-cart")
      expect(within(carbonaraOnSummary).getByLabelText("itemName")).toHaveTextContent("Carbonara")
      expect(within(carbonaraOnSummary).getByLabelText("itemCount")).toHaveTextContent(2)
      expect(within(carbonaraOnSummary).getByLabelText("itemPrice")).toHaveTextContent(15)
      expect(within(carbonaraOnSummary).getByLabelText("itemTotalPrice")).toHaveTextContent(30)

      const barbequeOnSummary = screen.getByLabelText("Barbeque-shopping-cart")
      expect(within(barbequeOnSummary).getByLabelText("itemName")).toHaveTextContent("Barbeque")
      expect(within(barbequeOnSummary).getByLabelText("itemCount")).toHaveTextContent(2)
      expect(within(barbequeOnSummary).getByLabelText("itemPrice")).toHaveTextContent(17)
      expect(within(barbequeOnSummary).getByLabelText("itemTotalPrice")).toHaveTextContent(34)
    })
  })
});