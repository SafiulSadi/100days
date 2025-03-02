import { useState } from "react"

function init(){
    console.log("init was executed");
    return Math.random();
}

export default function Counter(){
    let [count, setCount] = useState(init)

    function counter(){
        setCount((count)=>{
            return count+1;
        });
        setCount((prevVal)=>{
            return prevVal + 1;
        })
    }

    return (<div>
        <h3>{count}</h3>
        <button onClick={counter}>Click me!</button>
    </div>)
}