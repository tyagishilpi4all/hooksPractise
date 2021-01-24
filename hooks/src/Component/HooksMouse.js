import React,{ useState, useEffect } from "react";

function HooksMouse(){ 
    const[x, setX] = useState(0);
    const[y, setY] = useState(0);

    const mousePosition = (e)=>{
        console.log("!@##")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
      console.log("useEffect called..")
      window.addEventListener('mousemove', mousePosition)

      return(()=>{
        window.removeEventListener("mousemove", mousePosition)
      })
    },[])

    return(
        <div>
           <p>  x- axis -{x}</p>
           <p>  y- axis -{y}</p>
        </div>
    )
}

export default HooksMouse;