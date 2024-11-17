import React, { memo } from 'react';

const Todo = ({ todo = [], addTodo }) => {  // Set default empty array for `todo`
    console.log("Child Render");
    return (
        <>
            <h2>My Todos</h2>
            {Array.isArray(todo) && todo.map((item, index) => (  // Check if `todo` is an array
                <p key={index}>{item}</p>
            ))}
            <button onClick={addTodo}>Add Todo</button>
        </>
    );
}

export default memo(Todo);
