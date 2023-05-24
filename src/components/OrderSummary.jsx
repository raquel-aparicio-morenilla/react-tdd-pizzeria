export function OrderSummary() {
    return <>
        <h1>Order Summary</h1>
        <div>
            <button>Place your order</button>
        </div>
        <div>
            <input type={"checkbox"} aria-labelledby={"tac"}/>
            <span id={"tac"}>Agree to Terms and Conditions</span>
            {/*
            Another way is this one
            <label><input type={"checkbox"}/>Agree to Terms and Conditions</label>
            */}
        </div>
    </>;
}