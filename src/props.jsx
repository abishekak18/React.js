import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props){
    return <h2>Hello Am {props.brand.model}</h2>
}

function Garage(){
    const CarInfo = {name:"Ford" , model:"Mustang"};
    return(
        <>
            <h1>Who Lives Here</h1>
            <Car brand={CarInfo}/>
        </>
    );
}

export default Garage;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);