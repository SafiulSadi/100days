import { useState } from "react"
export default function LudoBoard(){
    let [moves,setMoves] = useState({blue:0, red: 0, yellow:0, green:0});
    let [arr, setArr] = useState(["no moves"])

    function updateBlue(){
        // setBlueMove(blueMove + 1)
        // setMoves(moves.blue + 1)
        // setMoves((prevMoves)=>{
        //     return {...prevMoves, blue: prevMoves.blue + 1}
        // })
        // arr.push("blue moves")
        setArr((prevArr) => {return [...prevArr, "blue moves"]})
        console.log(arr);

    }
    function updateYellow(){
        setMoves((prevMoves)=>{
            return {...prevMoves, yellow:prevMoves.yellow +1}
        })
    }
    function updateGreen(){
        setMoves((prevMoves)=>{
            return{...prevMoves, green: prevMoves.green +1}
        })
    }
    function updateRed(){
        setMoves((prevMoves) => {
            return {...prevMoves, red: prevMoves.red + 1}
        })
    }
    
    return (<div>
        <p>Game begins</p>
        <p>{arr}</p>
        <div className="board">
            <p>Blue move = {moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
            <p>Yellow move = {moves.yellow}</p>
            <button style={{backgroundColor:"yellow", color: "black"}} onClick={updateYellow}>+1</button>
            <p>Green move = {moves.green}</p>
            <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
            <p>Red move = {moves.red}</p>
            <button onClick={updateRed} style={{backgroundColor: "red"}}>+1</button>

        </div>
    </div>)
}