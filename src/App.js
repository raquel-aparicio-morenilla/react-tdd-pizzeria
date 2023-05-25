import './App.css';
import {Menu} from "./components/Menu";
import {OrderSummary} from "./components/OrderSummary";
import {useState} from "react";

function App() {
    const [shoppingCartMap, setShoppingCartMap] = useState(new Map())

    const updateShoppingCart = ({item, itemCount}) => {
        const newShoppingCartMap = new Map(shoppingCartMap)
        newShoppingCartMap.set(item,itemCount)
        setShoppingCartMap(newShoppingCartMap)
    }

    const shoppingCart = [...shoppingCartMap].map(([mapKey, mapValue]) => ({ item: mapKey, itemCount: mapValue }))

    return (
    <div className="App">
        <Menu updateShoppingCart={updateShoppingCart}/>
        <br/>
        <OrderSummary shoppingCart={shoppingCart}/>
    </div>
  );
}

export default App;
