import {useEffect, useState} from "react";
import {getDessertList, getPizzaList} from "../gateways/menuGateway";

export function useMenu() {
    const [pizzaList, setPizzaList] = useState([]);
    const [dessertList, setDessertList] = useState([]);

    useEffect(() => {
        setPizzaList(getPizzaList());
        setDessertList(getDessertList());
    }, []);

    return {pizzaList, dessertList};
}