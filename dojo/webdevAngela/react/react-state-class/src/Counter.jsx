import { useState } from "react"
export default function Counter(){
    let [count, setCount] = useState(0)

    function counter(){
        setCount(count+1);
    }

    return (<div>
        <h3>{count}</h3>
        <button onClick={counter}>Click me!</button>
    </div>)
}