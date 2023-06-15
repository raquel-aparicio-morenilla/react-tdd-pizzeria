import './App.css';
import {Menu} from "./components/Menu";
import {OrderSummary} from "./components/OrderSummary";
import {ShoppingCartContextProvider} from "./context/ShoppingCartContext";


function App() {
    return (
    <div className="App">
        <ShoppingCartContextProvider>
            <Menu/>
            <br/>
            <OrderSummary/>
        </ShoppingCartContextProvider>
    </div>
  );
}

export default App;
