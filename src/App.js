import './App.css';
import {Menu} from "./components/Menu";
import {OrderSummary} from "./components/OrderSummary";
import {useState} from "react";

function App() {
    const [shoppingCart, setShoppingCart] = useState([])

    return (
    <div className="App">
        <Menu/>
        <br/>
        <OrderSummary shoppingCart={shoppingCart}/>
    </div>
  );
}

export default App;
