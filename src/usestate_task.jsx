import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

//WAP using usestate to increment a value

function Count(){
    const [val,setVal] = useState(1);
    const inc = () => {
        setVal((x)=> x+=1);
    };
    return(
        <>
            <h1>Counting : {val}</h1>
            <button type='button' onClick={inc}>Increment</button>
        </>
    );
}

export default Count;