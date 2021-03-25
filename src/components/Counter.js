import { useDispatch } from "react-redux";
import Actions from "../redux/Actions";

const Counter = ({ id, value }) => {

    const dispatch = useDispatch();

    return(
        <>
            id : { id }
            { value }
            <button onClick={() => dispatch({ type: Actions.INCREMENT_COUNTER, id })}>INCREASE</button>
            <button onClick={() => dispatch({ type: Actions.DECREMENT_COUNTER, id })}>DECREASE</button>
            <button onClick={() => dispatch({ type: Actions.REMOVE_COUNTER, id })}>Remove counter</button>
        </>
    )
}

export default Counter;
