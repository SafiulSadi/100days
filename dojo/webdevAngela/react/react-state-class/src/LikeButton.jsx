import { useState } from "react";
export default function LikeButton(){
    let [isLike, setisLike] = useState(false)

    let clicked = ()=>{
        setisLike(!isLike)
    }
    let styles = {color:"red"}
    return (<div>
        <p onClick={clicked}>
            {isLike? <span style ={styles}>♥</span>:<span>♡</span>}
            
         </p>
    </div>)
}
//  like &hearts;
// "♡"){
//             setHeart("♥")
//         }else{