import {useState} from "react";
import {useShoppingCartContext} from "../contexts/ShoppingCartContext";

const orderStatePendingToConfirm = 'pendingToConfirm'
const orderStateConfirmed = 'confirmed'

export function OrderSummary() {
    const { shoppingCart } = useShoppingCartContext()

    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [orderState, setOrderState] = useState(orderStatePendingToConfirm)

    const handleButtonClick = () => {
        setOrderState(orderStateConfirmed)
    }

    const handleCheckboxChange = () => {
        setIsCheckboxChecked(!isCheckboxChecked)
    }

    const isOrderConfirmed = orderState === orderStateConfirmed;
    const isEmptyCart = shoppingCart === undefined || shoppingCart.length == 0;

    const totalPrice = isEmptyCart ? 0: shoppingCart.reduce((total, shoppingCartItem) => total + shoppingCartItem.item.price * shoppingCartItem.itemCount, 0 )

    return <div aria-label={"orderSummarySection"}>
        <h1>Order Summary</h1>
        {isOrderConfirmed && <div>Your order has been confirmed</div>}
        <p/>
        <div>
            {isEmptyCart && "Empty cart"}
            {!isEmptyCart &&
                (<>
                    <div>
                        {shoppingCart.map(shoppingCartItem =>
                            <div key={shoppingCartItem.item.name} aria-label={shoppingCartItem.item.name + "-shopping-cart"}>
                                <span aria-label={"itemName"}>{shoppingCartItem.item.name}</span>
                                <span aria-label={"itemCount"} style={{paddingLeft:20}}>x{shoppingCartItem.itemCount}</span>
                                <span aria-label={"itemPrice"} style={{paddingLeft:100}}>Item price {shoppingCartItem.item.price}</span>
                                <span aria-label={"itemTotalPrice"} style={{paddingLeft:20}}>Total price: {shoppingCartItem.item.price * shoppingCartItem.itemCount} </span>
                            </div>
                        )}
                    </div>
                    <div aria-label={"orderPrice"}>
                        Order total price: {totalPrice}
                    </div>
                </>)
            }
        </div>
        <p/>
        <div>
            <button disabled={!isCheckboxChecked || isOrderConfirmed} onClick={handleButtonClick}>Place your order</button>
        </div>
        <p/>
        <div>
            <input type={"checkbox"} aria-labelledby={"tac"} checked={isCheckboxChecked} onChange={handleCheckboxChange}/>
            <span id={"tac"}>Agree to Terms and Conditions</span>
            {/*
            Another way is this one
            <label><input type={"checkbox"}/>Agree to Terms and Conditions</label>
            */}
        </div>
    </div>;
}