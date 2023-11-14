import { useState } from "react"

export default function  Counter(){
    const [count, serCount] = useState(0);
  
    const handleAdd = () =>{
        const newCount = count + 1;
        serCount(newCount)
    }

    const handleReduce = () =>{
        const newCount = count - 1;
        serCount(newCount)
    }

    return(
        <div style={{border: '3px solid yellow', padding: '30px'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduece</button>
        </div>
    )
}