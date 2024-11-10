import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props){
    return <li>I am {props.brand}</li>
}

function List(){
    const cars = ["Ford","BMW","Benz"];
    return(
        <>
            <ul>
                {cars.map((c) => <Car brand={c}/>)}
            </ul>
        </>
    );
}

export default List;