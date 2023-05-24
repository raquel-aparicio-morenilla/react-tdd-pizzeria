import './App.css';
import {Menu} from "./components/Menu";

function App() {
    return (
    <div className="App">
        <Menu/>
        Order Summary
        <button>Place your order</button>
        <input type={"checkbox"} aria-labelledby={"tac"}/>
        <span id={"tac"}>Agree to Terms and Conditions</span>
        {/*
        Another way is this one
        <label><input type={"checkbox"}/>Agree to Terms and Conditions</label>
        */}

    </div>
  );
}

export default App;
