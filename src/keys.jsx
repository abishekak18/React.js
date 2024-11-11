import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props){
    return <li>I am {props.brand}</li>
}

function Keys(){
    const cars = [
        {id:1 , brand:"Ford"},
        {id:2 , brand:"Benz"},
        {id:3 , brand:"BMW"}
    ];
    return(
        <>
            <ul>
                {cars.map((c) => <Car key={c.id} brand={c.brand}/>)}
            </ul>
        </>
    );
}

export default Keys;