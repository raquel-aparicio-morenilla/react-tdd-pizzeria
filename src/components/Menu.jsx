function getPizzaList() {
    return ["Carbonara", "Barbeque"];
}

export function Menu() {
    const pizzaList = getPizzaList();

    return <>
        <h1>Menu</h1>
        <h2>Pizza</h2>
        <ul>
            {pizzaList.map(pizza => <li key={pizza}>{pizza}</li>)}
        </ul>
    </>;
}