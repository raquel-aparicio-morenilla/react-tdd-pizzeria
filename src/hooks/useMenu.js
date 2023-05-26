import {useEffect, useState} from "react";
import {retrieveDessertList, retrievePizzaList} from "../gateways/menuGateway";

export function useMenu() {
    const [pizzaList, setPizzaList] = useState([])
    const [dessertList, setDessertList] = useState([])

    useEffect(() => {
        setPizzaList(retrievePizzaList());
        setDessertList(retrieveDessertList())
    }, [])
    return {pizzaList, dessertList};
}