import {useMenu} from "../hooks/useMenu";

export function Menu() {
    const pizzaList = useMenu();

    return <>
        <h1>Menu</h1>
        <h2>Pizza</h2>
        {pizzaList.map(pizza => <div key={pizza.name}>{pizza.name}</div>)}
        <h2>Dessert</h2>
    </>;
}