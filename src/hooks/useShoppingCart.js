import {useState} from "react";

export function useShoppingCart() {
    const [shoppingCartMap, setShoppingCartMap] = useState(new Map())

    const updateShoppingCart = ({item, itemCount}) => {
        const newShoppingCartMap = new Map(shoppingCartMap)
        itemCount == 0 ? newShoppingCartMap.delete(item) : newShoppingCartMap.set(item, itemCount)
        setShoppingCartMap(newShoppingCartMap)
    }

    const shoppingCart = [...shoppingCartMap].map(([mapKey, mapValue]) => ({item: mapKey, itemCount: mapValue}))
    return {updateShoppingCart, shoppingCart};
}
