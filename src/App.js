import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {

  const counter = useSelector( state => state.counter );
  const dispatch = useDispatch();

  return (
    <div className="App">
        {counter}
        <button onClick={() => dispatch({ type: 'INCREMENT'})}>INCREASE</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>DECREASE</button>
    </div>
  );
}

export default App;
