import React,{ useState } from 'react';

function Counter(){
    const [count, setCount] = useState(0)
    // const [count, setCount] = useState(0)
    return(
        <div>
            <button onClick={()=>setCount(count + 1)}>Count { count }</button>
            {/* <button onClick={()=>setDecrease(count - 1)}>Decrease</button> */}
        </div>
    )
}

export default Counter;