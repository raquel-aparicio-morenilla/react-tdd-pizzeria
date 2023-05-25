import './App.css';
import {Menu} from "./components/Menu";
import {OrderSummary} from "./components/OrderSummary";
import {useState} from "react";

function App() {
    const [shoppingCart, setShoppingCart] = useState([])

    const updateShoppingCart = ({item, itemCount}) => {
        const newShoppingCart = [
            ...shoppingCart,
            {item,itemCount}
        ]
        setShoppingCart(newShoppingCart)
    }


    return (
    <div className="App">
        <Menu updateShoppingCart={updateShoppingCart}/>
        <br/>
        <OrderSummary shoppingCart={shoppingCart}/>
    </div>
  );
}

export default App;
