import {useMenu} from "../hooks/useMenu";

export const pizzaType = "pizza"
export const dessertType = "dessert"

function MenuItem({item, itemType}) {
    const altText = item.name + " " + itemType;
    return <div>
        <img src={"assets/" + item.imageName} alt={altText} width={50} height={50}/>
        {item.name}
    </div>;
}

export function Menu() {
    const {pizzaList, dessertList} = useMenu();

    return <>
        <h1>Menu</h1>
        <h2>Pizza</h2>
        {
            pizzaList && pizzaList.map(pizza => <MenuItem key={pizza.name} item={pizza} itemType={pizzaType}/>)
        }
        <h2>Dessert</h2>
        {dessertList && dessertList.map(dessert => <MenuItem key={dessert.name} item={dessert} itemType={dessertType}/>)}
    </>;
}