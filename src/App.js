import logo from './logo.svg';
import './App.css';

function App() {
    const pizzaList = ["Carbonara", "Barbeque"];

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
