export function Menu() {
    const pizzaList = ["Carbonara", "Barbeque"];

    return <>
        <h1>Menu</h1>
        <h2>Pizza</h2>
        <ul>
            {pizzaList.map(pizza => <li key={pizza}>{pizza}</li>)}
        </ul>
    </>;
}