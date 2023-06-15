import {useShoppingCartContext} from "../context/ShoppingCartContext";

export function OrderSummary() {
    const { shoppingCart } = useShoppingCartContext()

    const isEmptyCart = shoppingCart === undefined || shoppingCart.length === 0;
    //{item: {name, price}, itemCount}
    return <div aria-label={"orderSummarySection"}>
        <h1>Order Summary</h1>
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
                </>)
            }
        </div>
    </div>;
}