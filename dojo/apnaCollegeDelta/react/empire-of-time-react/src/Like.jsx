import { useState } from "react";
export default function Like(){
    let [isLike, setIsLike] = useState(false)


    function toggleLike(){
        setIsLike(!isLike)
    }
    return (<span onClick={toggleLike} style={isLike?{color:"red", cursor:"pointer"}:{ cursor:"pointer"}}>
        {isLike ? "♥" : "♡"}
    </span>)
}