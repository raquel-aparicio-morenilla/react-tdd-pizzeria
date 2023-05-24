import {useEffect, useState} from "react";
import {getDessertList, getPizzaList} from "../gateways/menuGateway";

function parseItemList(itemList){
    return itemList.map(item => (
        {
            "name": item.name,
            "imagePath": "assets/" + item.imageName
        }
    ));
}

export function useMenu() {
    const [pizzaList, setPizzaList] = useState([]);
    const [dessertList, setDessertList] = useState([]);

    useEffect(() => {
        setPizzaList(parseItemList(getPizzaList()));
        setDessertList(parseItemList(getDessertList()));
    }, []);

    return {pizzaList, dessertList};
}