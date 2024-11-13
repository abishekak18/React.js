import React from 'react';
import { useState,useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function USEEFFECT(){
    const [count,setCount] = useState(0);
    const [calc,setCalc] = useState(0);

    useEffect(() => {
        setCalc(()=> count+2);
    }, [count]);

    return(
        <>
            <p>Count : {count}</p>
            <button onClick={()=> setCount((c)=>c+=1)}>+</button>
            <p>Calculation : {calc}</p>
        </>
    )
}

export default USEEFFECT;