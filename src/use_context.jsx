import React, { createContext, useContext } from 'react';
import { useState,useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const UserContext = createContext();

function Usecontent(){
    const [User, setUser] = useState("Sudhakar");
    return(
        <UserContext.Provider value={User}>
            <h1>{`Hello Am ${User}!!!`}</h1>
            <Comp2/>
        </UserContext.Provider>
    )
}

function Comp2(){
    return(
        <>
            <h1>This is Component 2</h1>
            <Comp3/>
        </>
    )
}

function Comp3(){
    const User = useContext(UserContext);
    return(
        <>
            <h1>{`Hello Am ${User} Again!!!`}</h1>
        </>
    )
}

export default Usecontent;