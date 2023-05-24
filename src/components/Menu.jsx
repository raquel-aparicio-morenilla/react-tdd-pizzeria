import {useMenu} from "../hooks/useMenu";

export function Menu() {
    const pizzaList = useMenu();

    return <>
        <h1>Menu</h1>
        <h2>Pizza</h2>
        <ul>
            {pizzaList.map(pizza => <li key={pizza.name}>{pizza.name}</li>)}
        </ul>
    </>;
}