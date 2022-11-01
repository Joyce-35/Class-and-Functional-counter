import './App.css';
import { useState } from "react"

const FunctionCounter = ()=>{
    const [count, handleUpdate] = useState({number: 0})
    return(
        <div>
            <div className='function'>
            <h1>Counter: {count.number}</h1>
            <hr/>
            <button onClick={()=> handleUpdate({number: count.number + 1})} className='button'>Increase count</button>
            <button onClick={()=> handleUpdate({number:count.number - 1})} className='button'>Decrease count</button>
            </div>
        </div>
    )
}
export default FunctionCounter;