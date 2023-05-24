import {useMenu} from "../hooks/useMenu";

function MenuItem({item}) {
    return <div>
        <img src={"assets/" + item.imageName} alt={item.name + " pizza"} width={50} height={50}/>
        {item.name}
    </div>;
}

export function Menu() {
    const {pizzaList, dessertList} = useMenu();

    return <>
        <h1>Menu</h1>
        <h2>Pizza</h2>
        {
            pizzaList && pizzaList.map(pizza => <MenuItem key={pizza.name} item={pizza}/>)
        }
        <h2>Dessert</h2>
        {dessertList && dessertList.map(dessert => <div key={dessert.name}>{dessert.name}</div>)}
    </>;
}