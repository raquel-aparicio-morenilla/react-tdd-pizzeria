import {useEffect, useState} from "react";

function getPizzaList() {
    return ["Carbonara", "Barbeque"];
}

function useMenu() {
    const [pizzaList, setPizzaList] = useState([])

    useEffect(() => {
        setPizzaList(getPizzaList());
    }, [])
    return pizzaList;
}

export function Menu() {
    const pizzaList = useMenu();

    return <>
        <h1>Menu</h1>
        <h2>Pizza</h2>
        <ul>
            {pizzaList.map(pizza => <li key={pizza}>{pizza}</li>)}
        </ul>
    </>;
}