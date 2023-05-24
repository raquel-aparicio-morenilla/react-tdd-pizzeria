import {useEffect, useState} from "react";
import menu from "../mocks/menu.json"

function getPizzaList() {
    return menu.pizzas;
}

export function useMenu() {
    const [pizzaList, setPizzaList] = useState([])

    useEffect(() => {
        setPizzaList(getPizzaList());
    }, [])

    return pizzaList;
}