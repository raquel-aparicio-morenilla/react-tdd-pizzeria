import './App.css';
import {Menu} from "./components/Menu";
import {OrderSummary} from "./components/OrderSummary";

function App() {
    return (
    <div className="App">
        <Menu/>
        <br/>
        <OrderSummary/>
    </div>
  );
}

export default App;
