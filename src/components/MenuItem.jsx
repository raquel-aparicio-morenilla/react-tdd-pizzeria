import {useState} from "react";

export const pizzaType = "pizza"
export const dessertType = "dessert"

export function MenuItem({item, itemType}) {
    const [quantity, setQuantity] = useState(0)
    const altText = item.name + " " + itemType;

    const handleSpinnerChange = (ev) => {
        setQuantity(ev.target.valueAsNumber)
    }

    return <div>
        <img src={item.imagePath} alt={altText} width={50} height={50}/>
        {item.name}
        <input type="number" min={0} value={quantity} aria-label={altText} onChange={handleSpinnerChange}/>
    </div>;
}