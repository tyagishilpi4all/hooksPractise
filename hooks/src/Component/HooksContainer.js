import React,{ useState } from "react";
import HooksMouse from './HooksMouse';

function HooksContainer(){
    
    const[display , setDisplay] = useState(true)

    return(
        <div>
            <button className="btn btn-primary" onClick={()=>setDisplay(!display)}>Click Me</button>
            {display && <HooksMouse />}
        </div>
    )
}

export default HooksContainer;