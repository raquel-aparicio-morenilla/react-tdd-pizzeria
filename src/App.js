import './App.css';
import {Menu} from "./components/Menu";
import {OrderSummary} from "./components/OrderSummary";
import {useShoppingCart} from "./hooks/useShoppingCart";

function App() {
    const {updateShoppingCart, shoppingCart} = useShoppingCart();

    return (
    <div className="App">
        <Menu updateShoppingCart={updateShoppingCart}/>
        <br/>
        <OrderSummary shoppingCart={shoppingCart}/>
    </div>
  );
}

export default App;
