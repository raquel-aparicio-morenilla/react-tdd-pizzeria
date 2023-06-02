import './App.css';
import {useMenu} from "./hooks/useMenu";
import {dessertType, MenuItem, pizzaType} from "./components/MenuItem";

function App() {
    const { pizzaList, dessertList } = useMenu();

    return (
    <div className="App">
        <div aria-label={"Menu"}>
            <h1>Menu</h1>
            <h2>Pizza</h2>
            {pizzaList.map(pizza => <MenuItem key={pizza.name} item={pizza} itemType={pizzaType}/>)}
            <h2>Dessert</h2>
            {dessertList.map(dessert => <MenuItem key={dessert.name} item={dessert} itemType={dessertType}/>)}
        </div>
    </div>
  );
}

export default App;
