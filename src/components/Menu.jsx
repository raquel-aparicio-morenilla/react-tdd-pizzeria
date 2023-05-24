import {useMenu} from "../hooks/useMenu";
import {useState} from "react";

export const pizzaType = "pizza"
export const dessertType = "dessert"

function MenuItem({item, itemType}) {
    const [quantity, setQuantity] = useState(0)
    const altText = item.name + " " + itemType;

    const handleSpinnerChange = (ev) => {
        setQuantity(ev.target.valueAsNumber)
    }

    return <div>
        <img src={"assets/" + item.imageName} alt={altText} width={50} height={50}/>
        {item.name}
        <input type="number" min={0} value={quantity} aria-label={altText} onChange={handleSpinnerChange}/>
    </div>;
}

export function Menu() {
    const {pizzaList, dessertList} = useMenu();

    return <>
        <h1>Menu</h1>
        <h2>Pizza</h2>
        {pizzaList && pizzaList.map(pizza => <MenuItem key={pizza.name} item={pizza} itemType={pizzaType}/>)}
        <h2>Dessert</h2>
        {dessertList && dessertList.map(dessert => <MenuItem key={dessert.name} item={dessert} itemType={dessertType}/>)}
    </>;
}