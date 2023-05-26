import {useEffect, useState} from "react";
import {retrievePizzaList} from "../gateways/menuGateway";



export function usePizzaList() {
    const [pizzaList, setPizzaList] = useState([])

    useEffect(() => {
        setPizzaList(retrievePizzaList());
    }, [])
    return pizzaList;
}