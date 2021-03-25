import Actions from "./Actions";

const initialState = {
    counters: []
}

const myReducer = (state = initialState, action) => {

    switch (action.type){
        case Actions.ADD_COUNTER:
            const counters = state.counters.map(counter => counter.id);
            const maxId = counters.length === 0 ? 1 : Math.max(...counters) + 1;
            const newCounter = {value: 0, id: maxId};
            return {
                counters: [
                    ...state.counters,
                    newCounter
                ]
            }
        case Actions.REMOVE_COUNTER:
            return {
                counters: state.counters.filter(counter => counter.id !== action.id)
            }
        case Actions.INCREMENT_COUNTER:
            const counterToIncrement = state.counters.find(counter => counter.id === action.id);
            const freezedCountersOnIncrement = state.counters.filter(counter => counter.id !== action.id);
            return {
                counters: [
                    ...freezedCountersOnIncrement,
                    {...counterToIncrement, value: counterToIncrement.value + 1}
                ]
            }
        case Actions.DECREMENT_COUNTER:
            const currentCounter = state.counters.find(counter => counter.id === action.id);
            const freezedCountersOnDecrement = state.counters.filter(counter => counter.id !== action.id);
            return {
                counters: [
                    ...freezedCountersOnDecrement,
                    {...currentCounter, value: currentCounter.value - 1}
                ]
            }
        default:
            return state;
    }
}

export default myReducer;
