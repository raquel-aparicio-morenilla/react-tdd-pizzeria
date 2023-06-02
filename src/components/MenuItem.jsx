export const pizzaType ="pizza"
export const dessertType = "dessert"

export function MenuItem({item, itemType}) {
    return <div>
        <span><img width={50} height={50} src={"assets/"+item.imageName} alt={"Deliciouss " + item.name + " " +itemType}/></span>
        {item.name}
    </div>;
}