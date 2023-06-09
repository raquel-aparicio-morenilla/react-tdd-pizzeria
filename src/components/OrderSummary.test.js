import {render, screen} from '@testing-library/react';
import {OrderSummary} from "./OrderSummary";

describe("render Order Summary", () =>{
    it("render Summary", () => {
        render(<OrderSummary/>)
        const summary = screen.getByText("Order Summary")
        expect(summary).toBeInTheDocument()
    })

    it("renders Empty cart on Order summary when there are no items on the shopping cart", () => {
        const shoppingCart = []
        render(<OrderSummary shoppingCart={shoppingCart}/>)
        const emptyCart = screen.getByText("Empty cart")
        expect(emptyCart).toBeInTheDocument()
    })

    it("do not render empty cart on Order summary when there are items on the shopping cart", () => {
        const shoppingCart = [{
            item: {name: "Carbonara", price :15},
            itemCount: 1
        }]
        render(<OrderSummary shoppingCart={shoppingCart}/>)
        const emptyCart = screen.queryByText("Empty cart")
        expect(emptyCart).not.toBeInTheDocument()
    })
})
