import {useState} from "react";

const orderStatePendingToConfirm = 'pendingToConfirm'
const orderStateConfirmed = 'confirmed'

export function OrderSummary({shoppingCart}) {
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

    return <>
        <h1>Order Summary</h1>
        {isOrderConfirmed && <div>Your order has been confirmed</div>}
        <p/>
        <div>
            {isEmptyCart && "Empty cart"}
        </div>

        <div>
            <button disabled={!isCheckboxChecked || isOrderConfirmed} onClick={handleButtonClick}>Place your order</button>
        </div>
        <div>
            <input type={"checkbox"} aria-labelledby={"tac"} checked={isCheckboxChecked} onChange={handleCheckboxChange}/>
            <span id={"tac"}>Agree to Terms and Conditions</span>
            {/*
            Another way is this one
            <label><input type={"checkbox"}/>Agree to Terms and Conditions</label>
            */}
        </div>
    </>;
}