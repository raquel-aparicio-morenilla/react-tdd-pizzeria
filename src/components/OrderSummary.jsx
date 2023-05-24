import {useState} from "react";

export function OrderSummary() {
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    return <>
        <h1>Order Summary</h1>
        <div>
            <button disabled={!isCheckboxChecked}>Place your order</button>
        </div>
        <div>
            <input type={"checkbox"} aria-labelledby={"tac"} checked={isCheckboxChecked}/>
            <span id={"tac"}>Agree to Terms and Conditions</span>
            {/*
            Another way is this one
            <label><input type={"checkbox"}/>Agree to Terms and Conditions</label>
            */}
        </div>
    </>;
}