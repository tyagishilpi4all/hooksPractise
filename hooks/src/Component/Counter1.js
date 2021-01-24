import React,{ useState } from 'react';

function Counter1(){
    const initialValues = 0;
    const[ count, setCount ] = useState(initialValues);

    return(
        <div>
            <h3>{ count} </h3>
            <button className="btn btn-primary mr-2" onClick={()=>setCount(initialValues)}>Reset</button>
            <button className="btn btn-primary mr-2" onClick={()=>setCount(prevState => prevState +1)}>Increment</button>
            <button className="btn btn-primary mr-2" onClick={count > 0 ? ()=>setCount(prevState => prevState -1): ()=>{}}>Decrement</button>
        </div>
    )
}
export default Counter1;