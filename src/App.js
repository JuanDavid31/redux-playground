import './App.css';
import {useDispatch, useSelector} from "react-redux";
import Counter from "./components/Counter";
import Actions from "./redux/Actions";

function App() {

  const counters = useSelector( state => state.counters );
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: Actions.ADD_COUNTER })}>Add counter</button>
      <hr />
        <ul>
            {
                counters.sort((counter1, counter2) => counter1.id - counter2.id)
                    .map(counter => {
                        return (
                            <div key={counter.id}>
                                <Counter id={counter.id}/> value={counter.value} <br/>
                            </div>
                        );
                    })
            }
        </ul>
    </div>
  );
}

export default App;
