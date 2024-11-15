import React, { createContext, useContext } from 'react';
import { useRef } from 'react';
import { useState,useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function Useref(){
    const [inp,setInp] = useState("");
    const prev = useRef("");
    useEffect(()=>{
        prev.current = inp;
    },[inp]);
    return(
        <>
            <input type="text" 
                value={inp}
                onChange={(e)=>setInp(e.target.value)}
            />
            <h2 style={{color: "red"}}>Current : {inp}</h2>
            <h2>Previous : {prev.current}</h2>
        </>
    );
}

export default Useref;