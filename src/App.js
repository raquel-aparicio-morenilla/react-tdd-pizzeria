import './App.css';

function App() {
    const pizzaList = ["Carbonara", "Barbeque"];

    return (
    <div className="App">
        <h1>Menu</h1>
        <h2>Pizza</h2>
        <ul>
            {pizzaList.map(pizza => <li key={pizza}>{pizza}</li>)}
        </ul>
    </div>
  );
}

export default App;
