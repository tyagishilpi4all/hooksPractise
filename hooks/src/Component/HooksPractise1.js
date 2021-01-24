import React,{ useState } from 'react';

function HooksPractise1(){
    const[items , setItems] = useState([])

    const addItems = () =>{
        setItems([...items, { value: Math.floor(Math.random()*20)+1 }])
    }

    return(
        <div>
            <button className="btn btn-primary" onClick={addItems}>Add Items</button>
            <ul>
               {
                   items.map((obj, index) => (
                       <li key={index}>{obj.value}</li>
                   ))
               }
            </ul>
        </div>
    )
}

export default HooksPractise1;