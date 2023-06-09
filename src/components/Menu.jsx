import {useMenu} from "../hooks/useMenu";
import {dessertType, MenuItem, pizzaType} from "./MenuItem";

export function Menu({setShoppingCart}) {
    const {pizzaList, dessertList} = useMenu();
    return <>
        <div aria-label={"Menu"}>
            <h1>Menu</h1>
            <h2>Pizza</h2>
            {pizzaList.map(pizza => <MenuItem key={pizza.name} item={pizza} itemType={pizzaType} setShoppingCart={setShoppingCart}/>)}
            <h2>Dessert</h2>
            {dessertList.map(dessert => <MenuItem key={dessert.name} item={dessert} itemType={dessertType} setShoppingCart={setShoppingCart} />)}
        </div>
    </>
}