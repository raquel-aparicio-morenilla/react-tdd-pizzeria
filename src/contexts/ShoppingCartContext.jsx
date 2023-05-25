import {createContext, useContext} from "react";
import {useShoppingCart} from "../hooks/useShoppingCart";

export const ShoppingCartContext = createContext() //{Provider, Consumer}

export function useShoppingCartContext(){
    const contextValue = useContext(ShoppingCartContext)
    if(!contextValue)
        throw Error("useShoppingCartContext must be called from within a provider")
    return contextValue
}


export function ShoppingCartContextProvider(props){
    const {updateShoppingCart, shoppingCart} = useShoppingCart();

    const value={shoppingCart, updateShoppingCart}
    return <ShoppingCartContext.Provider value = {value} {...props}/>
}