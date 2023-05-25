import {useMenu} from "../hooks/useMenu";
import {dessertType, MenuItem, pizzaType} from "./MenuItem";

export function Menu({updateShoppingCart}) {
    const {pizzaList, dessertList} = useMenu();

    return <>
        <h1>Menu</h1>
        <div aria-label={"pizzaSection"}>
            <h2>Pizza</h2>
            {pizzaList && pizzaList.map(pizza => <MenuItem key={pizza.name} item={pizza} itemType={pizzaType} updateShoppingCart={updateShoppingCart}/>)}
        </div>
        <div aria-label={"dessertSection"}>
            <h2>Dessert</h2>
            {dessertList && dessertList.map(dessert => <MenuItem key={dessert.name} item={dessert} itemType={dessertType} updateShoppingCart={updateShoppingCart}/>)}
        </div>
    </>;
}