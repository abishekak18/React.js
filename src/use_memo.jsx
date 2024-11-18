import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';

function Usememo(){
    const [count,setCount] = useState(10);
    const [arr,setArr] = useState([1,3,5,6]);
    function showMax(){
        console.log("Max Changing");
        return Math.max(...arr);
    }
    const memoval = useMemo(()=> showMax(),[arr]);
    return(
        <>
            <button onClick={()=>setCount(count+1)}>Add Count</button>
            <button onClick={()=> setArr([...arr,Math.round(count*Math.random())])}>Add Array</button>
            <p>{JSON.stringify(arr)}</p>
            <p>{memoval}</p>
            <p>{count}</p>
        </>
    )
}

export default Usememo;