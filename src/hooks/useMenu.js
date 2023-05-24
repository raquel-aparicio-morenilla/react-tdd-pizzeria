import {useEffect, useState} from "react";
import menu from "../mocks/menu.json"

function getPizzaList() {
    return menu.pizzas;
}
function getDessertList(){
    return menu.desserts;
}

export function useMenu() {
    const [pizzaList, setPizzaList] = useState([]);
    const [dessertList, setDessertList] = useState([]);

    useEffect(() => {
        setPizzaList(getPizzaList());
        setDessertList(getDessertList());
    }, []);

    return {pizzaList, dessertList};
}