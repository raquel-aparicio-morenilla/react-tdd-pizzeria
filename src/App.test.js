import {render, screen, waitFor, within} from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

jest.mock("./gateways/menuGateway", () => ({
    retrievePizzaList : () => (
            [
                {name:"Carbonara", price: 15},
                {name:"Barbeque", price : 16}
            ]
        ),
    retrieveDessertList : () => (
        [
            {name:"Vanilla icecream", price: 5}
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
        const priceList = screen.getAllByLabelText("price")
    });

  it("should render spinbuttons on each menu item", ()=> {
      render(<App/>)
      const spinbuttonList = screen.getAllByRole("spinbutton");
      expect(spinbuttonList).toHaveLength(3)
      spinbuttonList.forEach(
          spinbutton => expect(spinbutton.value).toBe("0")
      )
  })

    it('should accept user input', async function () {
        render(<App/>)
        const spinbutton = screen.getByTestId("Carbonara-spinbutton")
        userEvent.clear(spinbutton)
        userEvent.type(spinbutton, "1");
        await waitFor(() => expect(spinbutton.valueAsNumber).toBe(1));
    });

    it('should not allow negative numbers or empty, having 0 as default', async function () {
        render(<App/>)
        const spinbutton = screen.getByTestId("Carbonara-spinbutton")
        userEvent.clear(spinbutton)
        await waitFor(() => expect(spinbutton.valueAsNumber).toBe(0));
    });



    describe("render Order Summary", () =>{
        it("render Summary", () => {
            render(<App/>)
            const summary = screen.getByText("Order Summary")
            expect(summary).toBeInTheDocument()
        })

        it("renders Empty cart on Order summary when user has not selected any item yet", () => {
            render(<App/>)
            const emptyCart = screen.getByText("Empty cart")
            expect(emptyCart).toBeInTheDocument()
        })

        it("do not render empty cart on Order summary when user has selected any item", () => {
            render(<App/>)
            const carbonaraSpinner = screen.getByTestId("Carbonara-spinbutton")
            userEvent.type(carbonaraSpinner,"3")
            expect(carbonaraSpinner.valueAsNumber).toBe(3)
            const emptyCart = screen.queryByText("Empty cart")
            expect(emptyCart).not.toBeInTheDocument()

            const carbonara = screen.getByLabelText("itemName")
            expect(carbonara).toBeInTheDocument()
            expect(carbonara).toHaveTextContent("Carbonara")
            const carbonaraItemCount = screen.getByLabelText("itemCount")
            expect(carbonaraItemCount).toHaveTextContent(3)
            const carbonaraPrice = screen.getByLabelText("itemPrice")
            expect(carbonaraPrice).toHaveTextContent(15)
        })

        it("remove element from cart on Order summary when user enters count 0 after having entered a positive quantity", () => {
            render(<App/>)
            const carbonaraSpinner = screen.getByTestId("Carbonara-spinbutton")
            userEvent.type(carbonaraSpinner, "3")
            expect(carbonaraSpinner.valueAsNumber).toBe(3)
            userEvent.clear(carbonaraSpinner)
            //userEvent.type(carbonaraSpinner, "0")
            expect(carbonaraSpinner.valueAsNumber).toBe(0)

            const emptyCart = screen.getByText("Empty cart")
            expect(emptyCart).toBeInTheDocument()
        })
    })
})
