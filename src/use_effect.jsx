import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Favclr(){
    const [clr,setClr] = useState("Red");
    return(
        <>
            <h1>My Favourite Color Is {clr}</h1>
            <button type='button' onClick={()=>setClr("Blue")}>Blue</button>
            <button type='button' onClick={()=>setClr("Green")}>Green</button>
            <button type='button' onClick={()=>setClr("Pink")}>Pink</button>
            <button type='button' onClick={()=>setClr("Black")}>Black</button>
        </>
    );
}

export default Favclr;