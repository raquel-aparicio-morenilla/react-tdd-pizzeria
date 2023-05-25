import {useState} from "react";

export const pizzaType = "pizza"
export const dessertType = "dessert"

export function MenuItem({item, itemType, updateShoppingCart}) {
    const [quantity, setQuantity] = useState(0)
    const altText = item.name + " " + itemType;

    const handleSpinnerChange = (ev) => {
        const newQuantity = ev.target.valueAsNumber
        setQuantity(newQuantity)
        updateShoppingCart({item, itemCount: newQuantity})
    }

    return <div>
        <span>
            <img src={item.imagePath} alt={altText} width={50} height={50}/>
        </span>
        <span>
            {item.name}
        </span>
        <span aria-label={item.name + "-" + itemType + "-price"}>
             - Price: {item.price}
        </span>
        <span>
            <input type="number" min={0} value={quantity} aria-label={altText} onChange={handleSpinnerChange}/>
        </span>
    </div>;
}