import {useEffect, useState} from "react";

function getPizzaList() {
    return ["Carbonara", "Barbeque"];
}

export function useMenu() {
    const [pizzaList, setPizzaList] = useState([])

    useEffect(() => {
        setPizzaList(getPizzaList());
    }, [])

    return pizzaList;
}