import {useEffect, useState} from "react";

export function usePizzaList() {
    const [pizzaList, setPizzaList] = useState([])

    useEffect(() => {
        setPizzaList(["Carbonara", "Barbeque"]);
    }, [])
    return pizzaList;
}