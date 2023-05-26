import './App.css';
import {usePizzaList} from "./hooks/usePizzaList";

function App() {
    const pizzaList = usePizzaList();

    return (
    <div className="App">
        <div aria-label={"Menu"}>
            <h1>Menu</h1>
            <h2>Pizza</h2>
            {pizzaList.map(pizza => <div key={pizza}>{pizza}</div>)}
        </div>
    </div>
  );
}

export default App;
