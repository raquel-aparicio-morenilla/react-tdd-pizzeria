import {useMenu} from "../hooks/useMenu";

export function Menu() {
    const {pizzaList, dessertList} = useMenu();

    return <>
        <h1>Menu</h1>
        <h2>Pizza</h2>
        {pizzaList && pizzaList.map(pizza => <div key={pizza.name}>{pizza.name}</div>)}
        <h2>Dessert</h2>
        {dessertList && dessertList.map(dessert => <div key={dessert.name}>{dessert.name}</div>)}
    </>;
}