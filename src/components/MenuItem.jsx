import {useState} from "react";

export const pizzaType ="pizza"
export const dessertType = "dessert"

export function MenuItem({item, itemType, setShoppingCart}) {
    const [quantity, setQuantity] = useState(0)

    const handleChange = (ev) => {
        const newQuantity = parseInt(ev.target.valueAsNumber) || 0
        setQuantity(newQuantity)
        setShoppingCart(newQuantity == 0? [] : [{item:{name:item.name, price:item.price}, itemCount: newQuantity}])
    }

    return <div>
        <span><img width={50} height={50} src={"assets/"+item.imageName} alt={"Deliciouss " + item.name + " " +itemType}/></span>
        {item.name}

        <span aria-label={"price"}>Price: {item.price}</span>
        <input data-testid={item.name + "-spinbutton"} type={"number"} min ={0} value={quantity} onChange={handleChange}/>
    </div>;
}