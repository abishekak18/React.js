import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Todo from './Todo'; 

const Usecallback = () => {
    const [cnt, setCnt] = useState(0);
    const [todo, setTodo] = useState([]); 

    const inc = () => {
        setCnt((c) => c + 1);
    };

    const addTodo = useCallback(() => {
        setTodo((t) => [...t, "New Todo"]);
    }, []);

    return (
        <>
            <Todo todo={todo} addTodo={addTodo} />
            <div>
                Count: {cnt}
                <button onClick={inc}>+</button>
            </div>
        </>
    );
};

export default Usecallback;
