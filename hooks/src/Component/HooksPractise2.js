import React,{ useState, useEffect } from 'react';

function HooksPractise2(){
    const[ count, setCount ] = useState(0)
    const[name , setName] = useState('')

    useEffect(()=>{
        console.log("!!!")
        document.title = `you clicked ${count} times`
    },[count])
    
    return(
       <div>
           <div className="form-group col-4">
             <label>Name</label>
             <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
           </div>
           <button className="btn btn-primary" onClick ={()=>setCount(count +1)}>Click {count} times</button>
       </div>
    )
}

export default HooksPractise2;