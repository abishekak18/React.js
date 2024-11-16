import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';

const Actions = {
    Increment: "inc",
    Decrement: "dec",
};

const reducer = (state, action) => {
    switch (action.type) {
        case Actions.Increment:
            return { count: state.count + 1 };
        case Actions.Decrement:
            return { count: state.count - 1 };
        default:
            return state;
    }
};

function Usereducer() {
    const [state, dispatch] = useReducer(reducer, { count: 1 });

    const inc = () => {
        dispatch({ type: Actions.Increment });
    };
    const dec = () => {
        dispatch({ type: Actions.Decrement });
    };

    return (
        <div 
            style={{
                display: "flex",
                alignItems: "center",
            }}
        >
            <button onClick={dec}>-</button>
            <h1>{state.count}</h1>
            <button onClick={inc}>+</button>
        </div>
    );
}

export default Usereducer;
